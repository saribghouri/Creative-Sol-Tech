import { Typography } from "antd"
import { UserOutlined, CheckSquareOutlined, CalendarOutlined, AimOutlined } from "@ant-design/icons"

const { Title, Text, Paragraph } = Typography

export default function MarketingSection() {
  const stats = [
    { number: "15+", label: "YEARS OF EXPERIENCE" },
    { number: "90", label: "PROJECTS COMPLETED" },
    { number: "80%", label: "CLIENT SATISFACTION" },
  ]

  const processSteps = [
    {
      title: "MEETING",
      description: "Understanding the client's needs and setting objectives.",
      icon: <UserOutlined className="text-xl" />,
      isYellow: true,
    },
    {
      title: "EVALUATING",
      description: "Analyzing the project's scope, challenges, and resources.",
      icon: <CheckSquareOutlined className="text-xl" />,
      isYellow: false,
    },
    {
      title: "PLANNING",
      description: "Strategizing and outlining the steps for successful execution.",
      icon: <CalendarOutlined className="text-xl" />,
      isYellow: true,
    },
    {
      title: "EXECUTION",
      description: "Implementing the plan and delivering results.",
      icon: <AimOutlined className="text-xl" />,
      isYellow: false,
    },
  ]

  return (
    <div className="bg-black text-white mt-[140px] w-full p-8 lg:p-12">
      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-y[ellow-400 ]rounded-full"></div>
                <h1 className="text-[#44c5f8] text-xs font-medium tracking-widest uppercase">
                  YOUR ONE-STOP SOLUTION FOR ALL YOUR
                </h1>
              </div>

              <div className="flex items-start gap-8">
                <div className="flex-1">
                  <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                    MARKETING,
                    <br />
                    BRANDING &<br />
                    DIGITAL NEEDS
                  </h1>
                </div>
                {/* Custom Exclamation Mark */}
                <div className="flex flex-col relative items-center gap-2 mt-4">
                  <img className="w-42 h-42 -rotate-12" src="/QanWLr.png" alt="" />
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-12 pt-8">
              <button className="text-white font-medium text-sm tracking-wide pb-3 border-b-2 border-[#44c5f8] uppercase">
                HIRE US
              </button>
              <button className="text-gray-500 font-medium text-sm tracking-wide pb-3 hover:text-white transition-colors uppercase">
                WHAT IS BELLCOW?
              </button>
            </div>

            {/* Description */}
            <div className="pt-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                Welcome to <span className="text-white font-semibold">Bellcow Ventures</span> - a marketing agency
                specializing in creating captivating logos, professional corporate communications, dynamic social media
                content, eye-catching flyers, and comprehensive solutions for all your branding, marketing, and digital
                needs.
              </p>
            </div>

            {/* Work Process Section */}
            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#44c5f8] rounded-full"></div>
                <h1 className="text-[#44c5f8] text-xs font-medium tracking-widest uppercase">4 STEPS</h1>
              </div>

              <div>
                <h2 className="text-white text-2xl font-bold leading-tight">
                  OUR SIMPLE
                  <br />
                  <span className="text-gray-500">WORK PROCESS</span>
                </h2>
              </div>

              {/* Process Steps Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {processSteps.map((step, index) => (
                  <div key={index} className={`${step.isYellow ? "bg-[#154dc5]" : "bg-gray-800"} p-4 rounded-lg`}>
                    <div className="flex items-start gap-3">
                      <div className={`${step.isYellow ? "text-white" : "text-white"} mt-1`}>{step.icon}</div>
                      <div>
                        <h3
                          className={`${step.isYellow ? "text-white" : "text-white"} text-sm font-bold mb-2 tracking-wide`}
                        >
                          {step.title}
                        </h3>
                        <p className={`${step.isYellow ? "text-white" : "text-gray-300"} text-xs leading-relaxed`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stats Card */}
            <div className="bg-black border border-[#44c5f8] rounded-lg p-6">
              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-center">
                      <h3 className="text-[#44c5f8] text-3xl font-bold mb-1">{stat.number}</h3>
                      <p className="text-white text-xs font-medium tracking-widest">{stat.label}</p>
                    </div>
                    {index < stats.length - 1 && <div className="border-b border-gray-700 mt-6"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing Journey Image */}
            <div className="relative">
              <img
                src="/rIvVEM.jpg"
                alt="Let's start your marketing journey together"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
