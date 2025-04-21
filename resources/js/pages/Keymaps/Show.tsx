import { Head } from '@inertiajs/react';
import { useState } from 'react';

interface KeyBinding {
    position: number;
    key: string;
}

interface KeymapLayer {
    name: string;
    bindings: KeyBinding[];
}

interface KeymapData {
    keyboard_name: string;
    layout_macro: string;
    layers: KeymapLayer[];
}

interface Keyboard {
    id: number;
    name: string;
    form_factor: string;
    num_keys: number;
}

interface Keymap {
    id: number;
    name: string;
    keyboard_id: number;
    layout_json: KeymapData;
    keyboard: Keyboard;
}

interface Props {
    keymap: Keymap;
}

export default function KeymapShow({ keymap }: Props) {
    const [activeLayer, setActiveLayer] = useState(0);
    const [zmkOutput, setZmkOutput] = useState<string | null>(null);

    const handleLayerChange = (index: number) => {
        setActiveLayer(index);
    };

    const generateZmkOutput = async () => {
        try {
            const response = await fetch('/api/generate-keymap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    keyboard: keymap.keyboard.name,
                    layout: keymap.layout_json,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setZmkOutput(data.keymap);
            } else {
                alert('Error generating keymap: ' + data.message);
            }
        } catch (error) {
            console.error('Error generating keymap:', error);
            alert('An error occurred while generating the keymap.');
        }
    };

    return (
        <>
            <Head title={keymap.name} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="border-b border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                            <div className="mb-4 flex items-center justify-between">
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{keymap.name}</h1>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={generateZmkOutput}
                                        className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                                    >
                                        Generate ZMK Config
                                    </button>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="text-gray-600 dark:text-gray-400">
                                    Keyboard: <span className="font-semibold">{keymap.keyboard.name}</span> ({keymap.keyboard.form_factor},{' '}
                                    {keymap.keyboard.num_keys} keys)
                                </p>
                            </div>

                            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                                <ul className="-mb-px flex flex-wrap text-center text-sm font-medium">
                                    {keymap.layout_json.layers.map((layer, index) => (
                                        <li key={index} className="mr-2">
                                            <button
                                                onClick={() => handleLayerChange(index)}
                                                className={`inline-block rounded-t-lg border-b-2 p-4 ${
                                                    activeLayer === index
                                                        ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500'
                                                        : 'border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
                                                }`}
                                            >
                                                {layer.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                                    {keymap.layout_json.layers[activeLayer].name} Layer
                                </h3>
                                <div className="flex flex-wrap justify-center gap-1 rounded border bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
                                    {keymap.layout_json.layers[activeLayer].bindings.map((binding, index) => (
                                        <div
                                            key={index}
                                            className="flex h-12 w-12 items-center justify-center rounded border bg-white text-xs text-gray-900 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:shadow-gray-900/50 dark:hover:bg-gray-700"
                                            title={`Position ${binding.position}`}
                                        >
                                            {binding.key}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ZMK Output */}
                            {zmkOutput && (
                                <div className="mt-6">
                                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">ZMK Keymap Output</h3>
                                    <div className="relative">
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(zmkOutput);
                                                alert('Copied to clipboard!');
                                            }}
                                            className="absolute top-2 right-2 rounded bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                                        >
                                            Copy
                                        </button>
                                        <pre className="w-full overflow-x-auto rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-900 dark:text-gray-300">
                                            {zmkOutput}
                                        </pre>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
