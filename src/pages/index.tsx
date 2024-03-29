import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi"
import {FaHashtag} from "react-icons/fa"
import {IoMdNotifications} from "react-icons/io"
import {FaRegMessage} from "react-icons/fa6"
import {FaRegUserCircle} from "react-icons/fa"

import {IoBookmarksOutline} from "react-icons/io5"
import FeedCard from "@/components/FeedCard";

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useCallback } from "react";
import toast from "react-hot-toast";
import { graphqlClient } from "../../clients/api";
import { verifyUserGoogleTokenQuery } from "../../graphql/query/user";

interface TwitterSidebarButton {
  title: string,
  icon: React.ReactNode
}
const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />
  },
  {
    title: "Explore",
    icon: <FaHashtag />
  },
  {
    title: "Notification",
    icon: <IoMdNotifications />
  },
  {
    title: "Messages",
    icon: <FaRegMessage />
  },
  {
      title: "Bookmarks",
      icon: <IoBookmarksOutline />
    },
    {
      title: "Profile",
      icon: <FaRegUserCircle />
    }
];

export default function Home() { 

  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse)=>{
    const googleToken=cred.credential;
    console.log('login', googleToken)
    if(!googleToken) return toast.error("Google token is required");
     
    // const {verifyGoogleToken} = await graphqlClient.request(verifyUserGoogleTokenQuery, {token:googleToken});
     toast.success('Verfied Success')
    //  if(verifyGoogleToken)
    //  {localStorage.setItem('_twitter_token',verifyGoogleToken)}
  
  },[])
  
  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 flex             
             justify-start pt-8 ">
          <div className="text-4xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl ">          
            <ul>
              {
              sidebarMenuItems.map((item)=>
              {              
                  return (<li key={item.title}
                  className="flex justify-start items-center gap-4 text-lg
                  hover:bg-gray-400 rounded-full px-2 py-2 w-fit cursor-pointer"
                  >                
                    <span> {item.icon}</span>
                    <span> {item.title}</span>
                  </li>)
              })

              }
            </ul>
            <div className="mt-5 px-4">
            <button className="bg-blue-400 p-2 rounded-full w-full text-lg text-white">Tweet</button>
            </div>
          </div>
         
        </div>
        <div className="col-span-6 border-r-2 pt-8">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
           </div>
          <div className="col-span-3 p-2">
            <div className="bg-slate-600 rounded-lg p-2 ">
            <h1 className="my-2 text-lg text-white">New to Twitter?</h1>
            <GoogleLogin   onSuccess={handleLoginWithGoogle}  onError={() => { console.log('Login Failed'); }}/>;
            </div>
           </div>
      </div>
    </div>

  )
}
