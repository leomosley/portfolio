import fs from 'fs';

export interface Blog {
  name: string;
  filename: string;
  location: string;
  date: string;
  description: string;
}

export const blogs = [
  { name: "Test Blog", filename: "test-blog.md", location: "test-blog", date: "Mar 20, 2024", description: "This is the description for my test blog."},
] as Blog[];

export function getBlogAt(index: number) {
  try {
    return blogs[index];
  } catch (error) {
    console.log(error);
  }
}

export function getBlogByLocation(location: string) {
  try {
    let index = blogs.findIndex(blog => blog.location === location);
    return getBlogAt(index);
  } catch (error) {
    console.log(error);
  }
}

export function getBlogContent(filename: string) {
  try {
    return fs.readFileSync("./blogs/" + filename).toString();
  } catch (error) {
    console.log(error);
  }
}