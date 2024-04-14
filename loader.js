"use client";

export default function myImageLoader({src, width, quality}) {
    return `https://sushildulal.netlify.app/${src}?w=${width}&q=${quality || 75}`
}