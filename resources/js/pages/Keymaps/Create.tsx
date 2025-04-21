import { Head, useForm } from '@inertiajs/react';
import React, { useState } from 'react';

interface Keyboard {
    id: number;
    name: string;
    form_factor: string;
    num_keys: number;
}

interface Props {
    keyboards: Keyboard[];
}

export default function KeymapCreate({ keyboards }: Props) {
    const [selectedKeyboard, setSelectedKeyboard] = useState<Keyboard | null>(null);

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        keyboard_id: '',
        layout_json: JSON.stringify({
            keyboard_name: '',
            layout_macro: 'LAYOUT',
            layers: [
                {
                    name: 'Base',
                    bindings: [],
                },
            ],
        }),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/keymaps');
    };

    const handleKeyboardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const keyboardId = e.target.value;
        setData('keyboard_id', keyboardId);

        const keyboard = keyboards.find((k) => k.id.toString() === keyboardId);
        setSelectedKeyboard(keyboard || null);

        if (keyboard) {
            const bindings = Array.from({ length: keyboard.num_keys }, (_, i) => ({
                position: i,
                key: 'KC_NO', // Default to no key
            }));

            setData(
                'layout_json',
                JSON.stringify({
                    keyboard_name: keyboard.name,
                    layout_macro: 'LAYOUT',
                    layers: [
                        {
                            name: 'Base',
                            bindings: bindings,
                        },
                    ],
                }),
            );
        }
    };

    return (
        <>
            <Head title="Create Keymap" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="border-b border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                            <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Create New Keymap</h1>
                            {(window as any).flash?.success && (
                                <div className="mb-6 border-l-4 border-green-500 bg-green-100 p-4 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                    {(window as any).flash.success}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                {/* Name field */}
                                <div className="mb-4">
                                    <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300" htmlFor="name">
                                        Keymap Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="focus:shadow-outline w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:shadow-gray-900/30"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    {errors.name && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300" htmlFor="keyboard_id">
                                        Keyboard
                                    </label>
                                    <select
                                        id="keyboard_id"
                                        className="focus:shadow-outline w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:shadow-gray-900/30"
                                        value={data.keyboard_id}
                                        onChange={handleKeyboardChange}
                                        required
                                    >
                                        <option value="">Select a keyboard</option>
                                        {keyboards.map((keyboard) => (
                                            <option key={keyboard.id} value={keyboard.id}>
                                                {keyboard.name} ({keyboard.form_factor}, {keyboard.num_keys} keys)
                                            </option>
                                        ))}
                                    </select>
                                    {errors.keyboard_id && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.keyboard_id}</p>}
                                </div>

                                {selectedKeyboard && (
                                    <div className="mb-6">
                                        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Keyboard Layout</h3>
                                        <p className="mb-4 text-gray-600 dark:text-gray-400">
                                            This is a simplified layout. You'll be able to edit key assignments after creation.
                                        </p>

                                        <div className="flex flex-wrap justify-center gap-1 rounded border bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
                                            {Array.from({ length: selectedKeyboard.num_keys }, (_, i) => (
                                                <div
                                                    key={i}
                                                    className="flex h-12 w-12 items-center justify-center rounded border bg-white text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:shadow-gray-900/50"
                                                >
                                                    {i + 1}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="mt-6 flex items-center justify-end">
                                    <button
                                        type="submit"
                                        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
                                        disabled={processing}
                                    >
                                        {processing ? 'Creating...' : 'Create Keymap'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
