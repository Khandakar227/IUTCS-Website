import { Link } from "react-router-dom";

export default function TeamSection() {
  return (
    <div className="py-24 section grid md:grid-cols-2 gap-8 overflow-hidden">
        <div>
            <p
            className="text-blue-300"
            data-sal="slide-down" data-sal-duration="400" data-sal-delay="200"
            >Our Teams</p>
            <p
            className="text-2xl font-semibold max-w-md"
            data-sal="slide-down" data-sal-duration="400" data-sal-delay="400"
            >At present we have multiple teams to execute these functions. </p>
            <div
            className="pt-12"
            data-sal="slide-right" data-sal-duration="400" data-sal-delay="600"
            >
                <Link to={"/executive"} className="bg-blue-600 font-medium px-4 py-3 rounded-3xl shadow shadow-black">Full Executive Committee</Link>
            </div>
        </div>
        <div data-sal="slide-left" data-sal-duration="500" className="grid lg:grid-cols-2 gap-4 activities">
            <div className="grid gap-4 md:pb-6">
                <p data-sal="slide-down" data-sal-duration="400" data-sal-delay="550">Administration</p>
                <p data-sal="slide-down" data-sal-duration="400" data-sal-delay="600">Event Management</p>
                <p data-sal="slide-down" data-sal-duration="400" data-sal-delay="650">Operations</p>
                <p data-sal="slide-down" data-sal-duration="400" data-sal-delay="700">Publications & Content Writing</p>
                <p data-sal="slide-down" data-sal-duration="400" data-sal-delay="750">Logistics and Design</p>
            </div>
            <div className="grid gap-4 md:pt-6">
                <p data-sal="slide-down" data-sal-duration="400" data-sal-delay="800">Public Relation</p>
                <p data-sal="slide-down" data-sal-duration="400" data-sal-delay="850">Sponsorship and Liason</p>
                <p data-sal="slide-down" data-sal-duration="400" data-sal-delay="900">Photography, Video Editing, Graphics</p>
                <p data-sal="slide-down" data-sal-duration="400" data-sal-delay="950">Web</p>
            </div>
        </div>
    </div>
  )
}
