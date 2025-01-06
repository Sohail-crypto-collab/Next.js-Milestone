import { Card, CardContent } from "@/components/ui/card";
import { SimpleBlogCard } from "./lib/interface";
import { Client, urlFor } from "./lib/sanity";// Adjust the import path as necessary
import { Image } from "next-sanity/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) 
  {
    title,
    smallDescription,
    "currentslug": slug.current,
    titleImage
  }`;

const data = await Client.fetch(query)
return data;
}

export default async function Home() {
  const data: SimpleBlogCard[] = await getData();
  console.log(data)
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 gap-4">
      {data.map((post,idx) => (
        <Card key={idx}>
          <Image src={urlFor(post.titleImage).url()} alt="image" width={500} height={300}
            className="rounded-t-lg h-[250px] object-cover"/>
            <CardContent className="mt-5">
              <h1 className="text-lg font-sans font-semibold line-clamp-2 text-black">{post.title}</h1>
              <p className="text-sm line-clamp-3 mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
              <Button asChild className="w-full mt-5  font-bold" >
                <Link href={`/blog/${post.currentslug}`}>Read More</Link>
              </Button>

              </CardContent>        
          
        </Card>    
        
      ))}
    </div>
                       

  
  );
}
