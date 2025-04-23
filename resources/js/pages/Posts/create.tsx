import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Create Post",
        href: "/posts/create",
    },
];

export default function CreatePost() {
    const { data, setData, errors, post, reset, processing } = useForm({
        title: "",
        content: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/posts", {
            onSuccess: () => {
                reset();
            },
        })

    };


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Post" />
            <div className="container ms-auto p-4">
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Create Post</h1>

                    <Link href="/posts" className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600">
                        Back to Posts
                    </Link>
                </div>
                <form onSubmit={submit} method="POST" className="space-y-4">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                        <input type="text" name="title" value={data.title} onChange={(e) => setData('title', e.currentTarget.value )} id="title" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:focus:border-blue-500 dark:focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
                        <textarea name="content" id="content" value={data.content} onChange={(e) => setData('content', e.currentTarget.value)} required rows={5} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer'>Create Post</button>
                </form>
            </div>
        </AppLayout>
    );
}