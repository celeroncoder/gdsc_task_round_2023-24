import { Header } from "@/components/header";
import {
	ArrowRight,
	Bookmark,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Download,
	Lock,
	SearchIcon,
	Settings2,
} from "lucide-react";

export default function Home() {
	return (
		<main className="min-h-screen w-full bg-bg text-black pb-10">
			<Header />

			<section className="flex flex-col gap-5 items-center justify-center">
				<h1 className="text-4xl text-black">Popular Pro Stock Vectors</h1>
				<p className="max-w-sm text-bgDark text-center">
					High quality Vectors with worry-free licensing for personal and
					commercial use.
				</p>

				<div className="flex items-center justify-center bg-white text-black px-4 rounded-lg">
					<button className="flex items-center gap-2 border border-black rounded p-2">
						Vectors <ChevronDown className="w-4 h-4" />
					</button>
					<input
						placeholder="Search Vectors..."
						className="bg-transparent outline-none border-none p-5 pr-16"
					/>
					<SearchIcon className="w-6 h-6" />
				</div>
			</section>

			<section className="w-full flex items-center justify-between mt-20 px-20">
				<div className="flex items-center gap-8 justify-center text-lg">
					<div className="relative">
						Latest{" "}
						<div className="bg-red w-2 h-2 rounded-full absolute -right-2 top-0" />
					</div>

					<p>Popular</p>
					<p>|</p>

					<p className="text-red">Premium</p>
					<p className="text-blue">Free</p>
				</div>
				<div className="text-black flex items-center justify-center gap-4">
					<Settings2 />
					<Bookmark />
				</div>
			</section>

			{/* Cards */}
			<section className="mt-10 flex items-center justify-between px-20 gap-10">
				{/* Card */}
				<div className="bg-white rounded-xl p-5 shadow-2xl">
					<div className="bg-bg rounded-lg px-10 relative">
						<p className="absolute text-bgDark text-sm flex items-center justify-center gap-1 right-2 top-1">
							<Lock className="w-3 h-3" /> Premium
						</p>
						<img src="/images/card-image-1.png" className="w-48 h-48" />
					</div>

					<h1 className="text-center first-letter:text-4xl first-letter:text-black font-light text-bgDark mt-4">
						Anime Illustration
					</h1>

					<div className="mt-4 flex gap-3 items-center justify-center w-full">
						<p className="font-bold text-xl underline">Download</p>
						<Download />
					</div>
				</div>

				<div className="bg-white rounded-xl p-5 shadow-2xl">
					<div className="bg-bg rounded-lg px-10 relative">
						<p className="absolute text-bgDark text-sm flex items-center justify-center gap-1 right-2 top-1">
							<Lock className="w-3 h-3" /> Premium
						</p>
						<img src="/images/card-image-2.png" className="w-48 h-48" />
					</div>

					<h1 className="text-center first-letter:text-4xl first-letter:text-black font-light text-bgDark mt-4">
						Anime Illustration
					</h1>

					<div className="mt-4 flex gap-3 items-center justify-center w-full">
						<p className="font-bold text-xl underline">Download</p>
						<Download />
					</div>
				</div>

				<div className="bg-white rounded-xl p-5 shadow-2xl">
					<div className="bg-bg rounded-lg px-10 relative">
						<p className="absolute text-bgDark text-sm flex items-center justify-center gap-1 right-2 top-1">
							<Lock className="w-3 h-3" /> Premium
						</p>
						<img src="/images/card-image-3.png" className="w-48 h-48" />
					</div>

					<h1 className="text-center first-letter:text-4xl first-letter:text-black font-light text-bgDark mt-4">
						Anime Illustration
					</h1>

					<div className="mt-4 flex gap-3 items-center justify-center w-full">
						<p className="font-bold text-xl underline">Download</p>
						<Download />
					</div>
				</div>
			</section>

			<section className="mt-20 px-20 flex items-center justify-between">
				<div className="flex items-center justify-center gap-4">
					<p className="underline font-semibold">
						Discover All
						<br />
						Collections
					</p>

					{/* stacked cards */}
				</div>

				<button className="px-4 py-2 rounded-lg font-bold text-black bg-white shadow-xl flex items-center gap-2">
					Next Page <ArrowRight className="w-5" />
				</button>

				<div className="flex items-center justify-center gap-4">
					<p className="text-bgDark font-semibold">Page</p>

					<div className="flex items-center justify-center gap-2">
						<div className="flex items-center justify-center p-1 bg-bgDark bg-opacity-10 shadow-md rounded-lg">
							<ChevronLeft className="w-5" />
						</div>
						<div className="flex items-center justify-center p-1 px-3 bg-white border border-bgDark bg-opacity-10 shadow-md rounded-lg">
							1
						</div>
						<div className="flex items-center justify-center p-1 bg-bgDark bg-opacity-10 shadow-md rounded-lg">
							<ChevronRight className="w-5" />
						</div>
					</div>
					<p className="text-bgDark font-semibold">of 120</p>
				</div>
			</section>
		</main>
	);
}
