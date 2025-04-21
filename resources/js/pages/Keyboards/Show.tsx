import { Head } from '@inertiajs/react';

interface Keyboard {
    id: number;
    name: string;
    description: string;
    form_factor: string;
    num_keys: number;
    layout_data: any;
}

interface Props {
    keyboard: Keyboard;
}

export default function KeyboardShow({ keyboard }: Props) {
    return (
        <>
            <Head title={keyboard.name} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="border-b border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                            <div className="mb-6">
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{keyboard.name}</h1>
                                <div className="mt-2 flex items-center">
                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                        {keyboard.form_factor}
                                    </span>
                                    <span className="ml-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                                        {keyboard.num_keys} keys
                                    </span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Description</h2>
                                <p className="text-gray-700 dark:text-gray-300">{keyboard.description}</p>
                            </div>

                            <div className="mb-8">
                                <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Layout Preview</h2>
                                <div className="overflow-x-auto rounded border bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
                                    <div className="flex flex-wrap justify-center gap-1">
                                        {Array.from({ length: keyboard.num_keys }, (_, i) => (
                                            <div
                                                key={i}
                                                className="flex h-12 w-12 items-center justify-center rounded border bg-white text-sm font-medium text-gray-700 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:shadow-gray-900/50"
                                            >
                                                {i + 1}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    This is a simplified representation of the keyboard layout.
                                </p>
                            </div>

                            <div className="mt-8 space-x-4">
                                <a
                                    href={`/keymaps/create?keyboard=${keyboard.id}`}
                                    className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    Create Keymap for this Keyboard
                                </a>
                                <a
                                    href="/keyboards"
                                    className="rounded border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                                >
                                    Back to All Keyboards
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
