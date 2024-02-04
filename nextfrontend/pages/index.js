import Head from "next/head";
import { useState } from "react";
import { createClient } from "next-sanity";
import Script from "next/script";
import imageUrlBuilder from "@sanity/image-url";
import NavBar from "../components/NavBar";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
export default function Home({ skills, projects, profile }) {
  const client = createClient({
    projectId: "spmc989j",
    dataset: "production",
    useCdn: false,
    apiVersion: "v2022-03-07"
  });

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_name: user,
        from_email: email,
        message,
      };

      await emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  const builder = imageUrlBuilder(client);
  //const profile = {
  //   title: "WorkWithHarry",
  //   name: "Harry",
  //   image: "https://insanebiography.com/wp-content/uploads/codewithharry_108099807_133124151765153_6863548870509034899_n-min-edited.jpg",
  //   fbLink: "https://facebook.com/codewithharry",
  //   twitterLink: "https://twitter.com/codewithharry",
  //   instagramLink: "https://instagram.com/codewithharry",
  // }

  return (
    <>
      <Script src="/assets/js/main.js"></Script>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{profile.name} - Developer | Coder | Software Geek</title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//" />

        <meta property="og:url" content="//" />



        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossOrigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossOrigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
      </Head>
      <NavBar profile={profile} />

      <div>
        <div
          className="relative bg-cover bg-center bg-no-repeat py-8"
          style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}
        >
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

          <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <div className="rounded-full border-8 border-primary shadow-xl">
                <Image
                  src={builder.image(profile.image).width(200).url()}
                  className="h-48 rounded-full sm:h-56"
                  alt="author"
                />
              </div>
              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                  Hello I&rsquo;m {profile.name}!
                </h1>
                <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                  <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                    <p className="font-body text-lg uppercase text-white">
                      Let&rsquo;s connect
                    </p>
                    <div className="hidden sm:block">
                      <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                    <Link href={profile.facebook} target="_blank">
                      <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                    </Link>

                    <Link href={profile.linkedin} target="_blank" className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link
                      href={profile.instagram}
                      target="_blank"
                      className="pl-4"
                    >
                      <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link href={profile.github} target="_blank" className="pl-4">
                      <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-grey-50" id="about">
          <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
            <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
              <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Who am I?
              </h2>
              <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                I&rsquo;m {profile.name}, a Web Developer & Front-end Developer
              </h4>
              <p className="pt-6 font-body leading-relaxed text-grey-20">
                {profile.desc}
              </p>
              <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                <div className="flex items-center justify-center sm:justify-start">
                  <p className="font-body text-lg font-semibold uppercase text-grey-20">
                    Connect with me
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-2xl text-primary"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <Link href={profile.facebook} target="_blank">
                    <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                  </Link>

                  <Link href={profile.linkedin} target="_blank" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                  </Link>
                  <Link href={profile.instagram} target="_blank" className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                  </Link>
                  <Link href={profile.github} target="_blank" className="pl-4">
                    <i className="bx bxl-github text-2xl text-primary hover:text-yellow"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
              {skills.map((item) => {
                return (
                  <div className="pt-6" key={item.skill}>
                    <div className="flex items-end justify-between">
                      <h4 className="font-body font-semibold uppercase text-black">
                        {item.skill}
                      </h4>
                      <h3 className="font-body text-3xl font-bold text-primary">
                        {item.percentage}%
                      </h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                      <div
                        className="h-3 rounded-full bg-primary"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container py-16 md:py-20" id="services">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Here&rsquo;s what I&rsquo;m good at
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            These are the services I offer
          </h3>

          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div className="group rounded px-8 py-12 shadow hover:bg-primary">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <Image
                    src="/assets/img/icon-development-white.svg"
                    alt="development icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <Image
                    src="/assets/img/icon-development-black.svg"
                    alt="development icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Front-end Development
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
                </p>
              </div>
            </div>

            <div className="group rounded px-8 py-12 shadow hover:bg-primary">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <Image
                    src="/assets/img/icon-mobile-white.svg"
                    alt="Mobile Application icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <Image
                    src="/assets/img/icon-mobile-black.svg"
                    alt="Mobile Application icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Mobile Development
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
                </p>
              </div>
            </div>

            <div className="group rounded px-8 py-12 shadow hover:bg-primary">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <Image
                    src="/assets/img/icon-graphics-white.svg"
                    alt="Graphic Design icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <Image
                    src="/assets/img/icon-graphics-black.svg"
                    alt="Graphic Design icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Web Design
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-16 md:py-20" id="portfolio">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Check out my Portfolio
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Here&rsquo;s what I have done with the past
          </h3>

          <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
            {projects.map((project) => {
              return (
                <Link
                  key={project.title}
                  href={project.url} target="_blank"
                  className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                >
                  <Image
                    src={builder.image(project.image).url()}
                    className="w-full shadow"
                    alt="portfolio image"
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div
          className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
          style={{
            backgroundImage: "url(/assets/img/experience-figure.png)",
          }}
          id="statistics"
        >
          <div className="container"></div>
        </div>

        <div className="container py-16 md:py-20" id="contact">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Here&rsquo;s a contact form
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Have Any Questions?
          </h4>
          <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
            <p className="font-body text-grey-10">
              {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
            </p>
          </div>
          <form className="mx-auto w-full pt-10 sm:w-3/4" onSubmit={sendEmail}>
            <div className="flex flex-col md:flex-row">
              <input
                className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                placeholder="Name"
                type="text"
                id="name"
                value={user} onChange={(e) => setUser(e.target.value)}
                required
              />
              <input
                className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                placeholder="Email"
                type="email"
                id="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <textareLink
              className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
              placeholder="Message"
              id="message"
              cols="30"
              rows="10"
              value={message} onChange={(e) => setMessage(e.target.value)}
              required
            ></textareLink>
            <button className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
              Send
              <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
            </button>
          </form>
          <div className="flex flex-col pt-16 lg:flex-row justify-center"></div>
        </div>

        <div
          className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
          style={{ backgroundImage: "url(/assets/img/bg-cta.jpg)" }}
        >
          <div className="container relative z-30">
            <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
              Keep <span className="font-bold">up-to-date</span> <br />
              with what I&rsquo;m up to
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            Developed and Maintained by {profile.name} 2024
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <Link href={profile.facebook} target="_blank">
              <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
            </Link>

            <Link href={profile.linkedin} target="_blank" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link href={profile.instagram} target="_blank" className="pl-4">
              <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link href={profile.github} target="_blank" className="pl-4">
              <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
            </Link>
          </div>
        </div>
      </div>
    </>

    // <div className="home mx-8">
    //   <h1>{blogs[0].title}</h1>
    //   <div className="mx-8">

    //   <PortableText
    //   // Pass in block content straight from Sanity.io
    //   content={blogs[0].content}
    //   projectId = "spmc989j"
    // dataset = "production"
    //   // Optionally override marks, decorators, blocks, etc. in a flat
    //   // structure without doing any gymnastics
    //   serializers={{
    //     h1: (props) => <h1 style={{ color: "red" }} {...props} />,
    //     li: ({ children }) => <li className="special-list-item">{children}</li>,
    //   }}
    // />
    //   </div>
    //   <span>I am homepage</span>
    // </div>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "spmc989j",
    dataset: "production",
    useCdn: false,
  });
  const kquery = `*[_type == "knowledge"][0...12]`;
  const skills = await client.fetch(kquery);

  const query = `*[_type == "project"][0...6]`;
  const projects = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      skills,
      projects,
      profile,
    },
  };
}
