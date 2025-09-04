import Image from "next/image";
import square from "../public/square.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import github from "../public/tech-icons/github.svg";
import nextjs from "../public/tech-icons/nextjs.svg";
import linkedin from "../public/linkedin.svg";
import react from "../public/tech-icons/react.svg";
import tailwind from "../public/tech-icons/tailwind.svg";
import nodejs from "../public/tech-icons/nodejs.svg";
import python from "../public/tech-icons/python.svg";
import java from "../public/tech-icons/java.svg";
import javascript from "../public/tech-icons/javascript.png";
import firebase from "../public/tech-icons/firebase.svg";
import git from "../public/tech-icons/git.svg";
import sql from "../public/tech-icons/sql.png";
import googlecloud from "../public/tech-icons/googlecloud.svg";
import expo from "../public/tech-icons/expo.svg";
import clerk from "../public/tech-icons/clerk.svg";
import aws from "../public/tech-icons/aws.svg"; 
import mongodb from "../public/tech-icons/mongodb.svg";
import typesecript from "../public/tech-icons/typescript.svg";
import sanity from "../public/tech-icons/sanity.svg";
import shadcnui from "../public/tech-icons/shadcnui.svg";
import { Button } from "@/components/ui/button";

const icons = [
  nextjs,
  tailwind,
  nodejs,
  python,
  react,
  java,
  javascript,
  firebase,
  git,
  sql,
  googlecloud,
  expo,
  clerk,
  aws,
  mongodb,
  typesecript,
  sanity,
  shadcnui
];

const socialMedia = [
  {
    id: 1,
    icon: github,
    name: "Resume",
    username:"Abhishek Vaidya",
    link: "https://docs.google.com/document/d/1Q2JqCAYoODDL6WgWIi1uPm79zX0kmrjKePugLsm-Tpw/edit?usp=sharing",
  },
  {
    id: 2,
    icon: github,
    name: "GitHub",
    username: "@AbIsheKVaIdyA",
    link: "https://github.com/AbIsheKVaIdyA",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "@Abhishek Vaidya",
    link: "https://www.linkedin.com/in/abhishek-vaidya-73075424a/",
  },
];

export function SectionTwo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="sqaure"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>Explore my stack</CardTitle>
            <CardDescription>
              Check out the tools I use regularly
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item, index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
            ))}
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 bordrer-none"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button>
                <a href={item.link}>Hack Into Me</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
