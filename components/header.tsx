import { ArrowDown, ChevronDown, ChevronDownSquare, Plus } from "lucide-react";

export function Header() {
	return (
		<header className="w-full px-10 py-5 flex items-center justify-between">
			<section className="flex items-center justify-center gap-8">
				<div className="bg-yellow rounded h-10 w-10 flex items-end justify-end px-1">
					<p className="pl-2 text-md font-bold text-black">MR</p>
				</div>
				<div className="flex items-center justify-center gap-6">
					<p className="text-bgDark font-medium">Vectors</p>
					<p className="text-bgDark font-medium">Photos</p>
					<p className="text-bgDark font-medium">PSD</p>
					<p className="text-bgDark font-medium">Video</p>
				</div>

				<div className="text-black font-bold flex items-center gap-1">
					<p>More</p>
					<ChevronDown className="w-4 h-4" />
				</div>
			</section>
			<section className="flex items-center justify-center gap-6">
				<button className="gap-1 flex items-center rounded-lg text-bgDark border-2 border-bgDark p-3">
					<Plus className="w-4 h-4" />
					Submit
				</button>
				<div className="flex items-center justify-center gap-4">
					<div className="shadow-2xl rounded-full">
						<img className="w-10 h-10" src="/images/gmail-icon-free-png.webp" />
					</div>
					<div className="shadow-2xl rounded-full">
						<img className="w-10 h-10" src="/images/2021_Facebook_icon.png" />
					</div>
				</div>
			</section>
		</header>
	);
}
