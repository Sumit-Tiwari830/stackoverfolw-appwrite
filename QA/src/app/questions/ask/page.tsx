import React from "react";
import QuestionForm from "@/components/QuestionForm";

export default function AskQuestionPage() {
    return (
        <div className="container mx-auto px-4 pb-20 pt-36 max-w-4xl">
            <div className="mb-10">
                <h1 className="text-3xl font-bold">Ask a public question</h1>
                <p className="text-neutral-400 mt-2">
                    Write a good question and get answers from the Flowson community.
                </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-xl">
                {/* This renders your pre-built form! */}
                <QuestionForm />
            </div>
        </div>
    );
}