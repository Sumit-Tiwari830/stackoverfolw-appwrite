import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/models/server/config";
import { questionAttachmentBucket } from "@/models/name";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ fileId: string }> }
) {
    try {
        const { fileId } = await params;
        const file = await storage.getFileView(
            questionAttachmentBucket,
            fileId
        );

        return new NextResponse(file, {
            headers: {
                "Content-Type": "image/jpeg",
            },
        });
    } catch (err) {
        return NextResponse.json({ error: "Image failed" }, { status: 500 });
    }
}