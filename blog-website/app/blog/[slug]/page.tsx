import React from "react";
import { Client, urlFor } from "@/app/lib/sanity";
import { fullBlog } from "@/app/lib/interface";
import { Image } from "next-sanity/image";
import { PortableText } from "next-sanity";
import { TypedObject } from "@portabletext/types";
import CommentSection from "@/app/components/CommentSection";



async function getdata(slug: string) {
  const query = `*[_type=="blog" && slug.current == '${slug}']{
    "currentSlug": slug.current,
  title,
    content[]{..., _type, _key, children[]{..., _type, _key, text}},
      titleImage
    
}[0]
    `;

  const data = await Client.fetch(query);
  return data;
}

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function BlogArticle({ params }: Params) {
  const { slug } = await params;
  const data: fullBlog & { content: TypedObject[] } = await getdata(slug);

  console.log(data);

  return (
    <div>
      <h1>
        <span className="mt-8 block md:text-5xl sm:text-3xl text-center leading-8 font-bold tracking-tight text-blue-500">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.titleImage).url()}
        width={900}
        height={500}
        alt="title image"
        priority={true}
        
        
        className="rounded-lg mt-8 border object-cover"
      />
      <div className="mt-8 max-w-4xl  prose prose-blue lg:prose-md dark:prose-invert ">
        <PortableText value={data.content} />
        
      </div>
      <div className="mt-8 max-w-4xl">
        <CommentSection />
      </div>
      
      
    </div>
  );
}
