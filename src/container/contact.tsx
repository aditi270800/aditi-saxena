import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import Github from "../assets/Icons/github";
import Linkedin from "../assets/Icons/linkedin";
import { basicsDetails } from "../global/constant";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="section-pad px-[clamp(24px,8vw,120px)] bg-bg"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-card p-10 md:p-20 relative overflow-hidden bg-gradient-to-br from-surface to-bg">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="s-label !mb-6">Communication</div>
              <h2 className="s-title !mb-6">Open to new opportunities!!</h2>
              <p className="text-text2 text-lg leading-relaxed mb-10 max-w-[480px]">
                I'm currently a Technical Lead at YABX, open to hearing about
                Senior/Lead engineering roles or technical advisory work. Best way
                to reach me is email — I'll get back to you.
              </p>

              <div className="flex flex-col gap-6">
                <a
                  href={`mailto:${basicsDetails?.email}`}
                  className="flex items-center gap-5 p-5 glass-card hover:border-accent group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 grid place-items-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-text3 text-[10px] uppercase font-mono tracking-widest mb-0.5">
                      Direct Inquiry
                    </div>
                    <div className="text-text font-bold">
                      {basicsDetails?.email}
                    </div>
                  </div>
                  <ArrowUpRight
                    className="ml-auto text-text3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    size={20}
                  />
                </a>

                <div className="flex gap-4">
                  {[
                    {
                      icon: <Linkedin size={20} />,
                      label: "LinkedIn",
                      link: basicsDetails?.links?.linkedin,
                    },
                    {
                      icon: <Github size={20} />,
                      label: "GitHub",
                      link: basicsDetails?.links?.github,
                    },
                  ].map((soc, i) => (
                    <a
                      key={i}
                      href={soc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-5 glass-card flex items-center justify-center gap-3 hover:border-accent text-text group transition-all"
                    >
                      {soc.icon}
                      <span className="font-head font-bold text-sm">
                        {soc.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative text-center">
              <motion.div
                className="w-full aspect-square max-w-[400px] mx-auto glass-card border-none bg-accent/5 grid place-items-center relative"
                animate={{
                  borderRadius: [
                    "40% 60% 70% 30% / 40% 50% 60% 40%",
                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                    "40% 60% 70% 30% / 40% 50% 60% 40%",
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-accent">
                  <MessageSquare size={120} strokeWidth={1} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
