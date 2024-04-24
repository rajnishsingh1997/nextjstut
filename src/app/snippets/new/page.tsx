import React from "react";
import { db } from "@/db";

const SnippetCreatePage = () => {
  async function createsnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await db.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });

    console.log(snippet);
    
  }
  return (
    <form action={createsnippet}>
      <div>
        <h2 className="text-3xl font-medium text-center m-2">
          Create Your Snippet.
        </h2>
      </div>
      <div className="max-w-[600px] mx-auto py-4 px-4 border border-black  items-center rounded-md">
        <div className="flex flex-col items-center">
          <label className="font-semibold text-2xl" htmlFor="title">
            Title
          </label>
          <input
            className="w-full border px-2 py-2 rounded-lg"
            id="title"
            name="title"
            placeholder="Enter title"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="font-semibold text-2xl" htmlFor="code">
            Code
          </label>
          <textarea
            className="w-full border px-2 py-2 rounded-lg"
            id="code"
            name="code"
            placeholder="enter or paste your code!"
          />
        </div>
        <button
          className="bg-gray-400 rounded w-[150px] h-[30px] mx-auto m-2 "
          type="submit"
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
