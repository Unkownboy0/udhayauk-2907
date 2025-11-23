import { Button } from "@/components/ui/button";
import { SiMedium, SiLinkedin, SiYoutube, SiInstagram, SiKalilinux, SiAndroid, SiLinux, SiPython, SiDocker, SiGit, SiBurpsuite } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { HandIcon, Shield, Terminal, Code2, Zap, Lock, Cpu } from "lucide-react";
import profileImage from "@assets/WhatsApp_Image_2025-11-20_at_20.06.59_13b777e6-removebg-preview_1763908015110.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
      data-testid="section-hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center gap-2">
              <HandIcon className="w-8 h-8 text-cyan" />
              <span className="text-lg text-muted-foreground">
                Hi, I'm <span className="text-cyan font-semibold">Udhayakumar</span>
              </span>
            </div>

            <div className="relative inline-block">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                Cybersecurity
                <br />
                Researcher and
                <br />
                Investigator
              </h1>
              {/* Animated underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-8"
                viewBox="0 0 375 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M374.5 27.0001C157 -28 15 18.1795 6.0003 21.5006C-4.49975 28.5 2.00033 32.5007 8.0003 33.5006C14.0003 34.5004 165.5 -10.9999 374.5 27.0001Z"
                  fill="#00CED1"
                />
              </svg>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              CEO of Cappricio Securities, a cybersecurity firm in Chennai, India. I specialize in ethical hacking,
              securing platforms like Android OS, Google, and Microsoft from vulnerabilities and threats.
            </p>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Follow me</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-lg transition-all"
                  data-testid="link-medium"
                >
                  <SiMedium className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-lg transition-all"
                  data-testid="link-twitter"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-lg transition-all"
                  data-testid="link-instagram"
                >
                  <SiInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-lg transition-all"
                  data-testid="link-linkedin"
                >
                  <SiLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-lg transition-all"
                  data-testid="link-youtube"
                >
                  <SiYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                data-testid="button-roadmaps"
              >
                Roadmaps
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/api/resume';
                  link.download = 'Udhayakumar_Resume.pdf';
                  link.click();
                }}
                data-testid="button-download-resume"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image with Floating Icons */}
          <div className="relative flex justify-center items-center animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Udhayakumar Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Icons */}
              {/* Top Right - Security Shield */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              
              {/* Top Left - Python */}
              <div className="absolute -top-2 -left-8 w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-150">
                <SiPython className="w-7 h-7 text-cyan" />
              </div>
              
              {/* Left Top - Kali Linux */}
              <div className="absolute top-1/4 -left-6 w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-100">
                <SiKalilinux className="w-7 h-7 text-cyan" />
              </div>
              
              {/* Left Middle - Terminal */}
              <div className="absolute left-1/2 -left-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-250">
                <Terminal className="w-7 h-7 text-primary" />
              </div>
              
              {/* Left Bottom - Docker */}
              <div className="absolute bottom-1/4 -left-8 w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-350">
                <SiDocker className="w-7 h-7 text-cyan" />
              </div>
              
              {/* Bottom Left - Git */}
              <div className="absolute -bottom-4 left-1/3 w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-200">
                <SiGit className="w-7 h-7 text-primary" />
              </div>
              
              {/* Bottom Right - Android */}
              <div className="absolute -bottom-6 right-1/4 w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-300">
                <SiAndroid className="w-8 h-8 text-cyan" />
              </div>
              
              {/* Right Bottom - Code */}
              <div className="absolute bottom-1/4 -right-8 w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-200">
                <Code2 className="w-7 h-7 text-primary" />
              </div>
              
              {/* Right Middle - Lock */}
              <div className="absolute right-1/2 -right-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-400">
                <Lock className="w-7 h-7 text-cyan" />
              </div>
              
              {/* Right Top - Cpu */}
              <div className="absolute top-1/4 -right-6 w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-50">
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              
              {/* Top Center - Linux */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-400">
                <SiLinux className="w-7 h-7 text-cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
