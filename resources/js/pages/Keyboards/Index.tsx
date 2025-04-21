import { Head } from '@inertiajs/react';

interface Keyboard {
    id: number;
    name: string;
    description: string;
    form_factor: string;
    num_keys: number;
}

interface Props {
    keyboards: Keyboard[];
    formFactors: string[];
    currentFilter: string | null;
}

export default function KeyboardIndex({ keyboards, formFactors, currentFilter }: Props) {
    return (
        <>
            <Head title="Keyboards" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="border-b border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                            <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Keyboards</h1>
                            <div className="mb-6">
                                <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300" htmlFor="filter">
                                    Filter by Form Factor
                                </label>
                                <div className="flex items-center">
                                    <select
                                        id="filter"
                                        className="focus:shadow-outline rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                        onChange={(e) => {
                                            if (e.target.value) {
                                                window.location.href = `/keyboards?form_factor=${e.target.value}`;
                                            } else {
                                                window.location.href = '/keyboards';
                                            }
                                        }}
                                        value={currentFilter || ''}
                                    >
                                        <option value="">All Form Factors</option>
                                        {formFactors.map((factor) => (
                                            <option key={factor} value={factor}>
                                                {factor}
                                            </option>
                                        ))}
                                    </select>
                                    {currentFilter && (
                                        <a href="/keyboards" className="ml-2 text-blue-500 hover:underline dark:text-blue-400">
                                            Clear Filter
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {keyboards.map((keyboard) => (
                                    <div
                                        key={keyboard.id}
                                        className="overflow-hidden rounded-lg border bg-white shadow-md transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-700 dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50"
                                    >
                                        <div className="p-4">
                                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{keyboard.name}</h2>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {keyboard.form_factor} • {keyboard.num_keys} keys
                                            </p>
                                            <p className="mt-2 line-clamp-2 text-gray-700 dark:text-gray-300">{keyboard.description}</p>
                                            <div className="mt-4">
                                                <a
                                                    href={`/keyboards/${keyboard.id}`}
                                                    className="inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                                                >
                                                    View Details
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {keyboards.length === 0 && (
                                <div className="py-8 text-center">
                                    <p className="text-gray-500 dark:text-gray-400">No keyboards found. Try a different filter.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
