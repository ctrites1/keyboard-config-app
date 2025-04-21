import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm dark:bg-neutral-900">
                        <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
                        <div className="space-y-3">
                            <Link
                                href={route('keyboards.index')}
                                className="flex items-center rounded-lg border border-neutral-200 bg-white p-3 text-sm transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                            >
                                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="M6 8h.01" />
                                        <path d="M10 8h.01" />
                                        <path d="M14 8h.01" />
                                        <path d="M18 8h.01" />
                                        <path d="M6 12h.01" />
                                        <path d="M10 12h.01" />
                                        <path d="M14 12h.01" />
                                        <path d="M18 12h.01" />
                                        <path d="M6 16h.01" />
                                        <path d="M10 16h.01" />
                                        <path d="M14 16h.01" />
                                        <path d="M18 16h.01" />
                                    </svg>
                                </span>
                                <span>Browse Keyboards</span>
                            </Link>

                            <Link
                                href={route('keymaps.create')}
                                className="flex items-center rounded-lg border border-neutral-200 bg-white p-3 text-sm transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                            >
                                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 5v14" />
                                        <path d="M5 12h14" />
                                    </svg>
                                </span>
                                <span>Create New Keymap</span>
                            </Link>

                            <Link
                                href={route('keymaps.index')}
                                className="flex items-center rounded-lg border border-neutral-200 bg-white p-3 text-sm transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                            >
                                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                                        <path d="M14 3v5h5" />
                                        <path d="M16 13H8" />
                                        <path d="M16 17H8" />
                                        <path d="M10 9H8" />
                                    </svg>
                                </span>
                                <span>View Your Keymaps</span>
                            </Link>
                        </div>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm dark:bg-neutral-900">
                        <h2 className="mb-4 text-lg font-semibold">ZMK Resources</h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://zmk.dev/docs/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-600 hover:underline dark:text-blue-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-2 h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 21a9 9 0 0 0 0-18" />
                                        <path d="M3.6 9h16.8" />
                                        <path d="M3.6 15h16.8" />
                                    </svg>
                                    ZMK Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/zmkfirmware/zmk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-600 hover:underline dark:text-blue-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-2 h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                    ZMK GitHub Repository
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.gg/8cfMkQksSB"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-600 hover:underline dark:text-blue-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-2 h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M9 7 6 20l7-7 7 7-3-13" />
                                    </svg>
                                    ZMK Discord Community
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm dark:bg-neutral-900">
                        <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Your recent keymap activity will appear here.</p>
                        <div className="mt-4 flex justify-center">
                            <PlaceholderPattern className="h-20 w-20 stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div>
                    </div>
                </div>

                <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex-1 overflow-hidden rounded-xl border bg-white p-6 shadow-sm md:min-h-min dark:bg-neutral-900">
                    <h2 className="mb-4 text-lg font-semibold">ZMK Keyboard Layout Editor</h2>
                    <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                        Create and customize your keyboard layouts with our intuitive visual editor. Select a keyboard model to start, then define
                        your layers and key bindings.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-8 dark:border-neutral-700 dark:bg-neutral-800">
                        <div className="text-center">
                            <p className="mb-4 text-sm font-medium">Preview your keyboard layout</p>
                            <div className="grid grid-cols-12 gap-1">
                                {Array.from({ length: 36 }, (_, i) => (
                                    <div
                                        key={i}
                                        className={`flex h-10 items-center justify-center rounded bg-white text-xs font-medium shadow-sm transition-all hover:shadow dark:bg-neutral-700 dark:text-neutral-200 ${
                                            i < 24 ? 'col-span-1' : 'col-span-2'
                                        }`}
                                    >
                                        {String.fromCharCode(65 + (i % 26))}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6">
                                <Link
                                    href={route('keymaps.create')}
                                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-neutral-900"
                                >
                                    Start Creating
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-2 h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
