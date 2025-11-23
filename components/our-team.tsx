"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo, useEffect } from "react";
import { 
  Linkedin, 
  Twitter, 
  Mail,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
  } from "@/components/ui/carousel"
const teamMembers = [
  {
    id: 1,
    name: "Thomas Cockerham",
    role: "CEO of the company",
    title: "Visionary Leadership for Sustainable Growth",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "As the driving force behind our company, Thomas brings over two decades of experience in technology leadership and innovation. His mission is to create solutions that stand the test of time, fostering a culture of excellence and forward-thinking. Under his guidance, we've achieved remarkable milestones in building immortal technology that adapts and evolves.",
    detailedDescription: "Thomas's passion for excellence drives our commitment to creating technology that truly lasts forever. He believes in fostering a collaborative culture where innovation thrives, and every team member is empowered to contribute to our vision of building immortal solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "thomas@wrim.com"
    }
  },
  {
    id: 2,
    name: "Clinton Lowry",
    role: "Creative Director",
    title: "Designing the Future",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    description: "Clinton leads our creative vision, transforming complex ideas into beautiful, intuitive experiences. His expertise in design thinking ensures our products are not only functional but also delightful to use.",
    detailedDescription: "With a background in both design and technology, Clinton bridges the gap between aesthetics and functionality. He's passionate about creating user experiences that feel timeless and intuitive, ensuring our products remain relevant for generations to come.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "clinton@wrim.com"
    }
  },
  {
    id: 3,
    name: "Kenneth Kells",
    role: "Business Recruiting",
    title: "Building Exceptional Teams",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    description: "Kenneth is responsible for finding and nurturing the best talent in the industry. His strategic approach to recruitment ensures we build teams that share our vision of creating immortal technology.",
    detailedDescription: "Kenneth's expertise in talent acquisition has been instrumental in building our diverse, high-performing team. He believes that great technology comes from great people, and his commitment to finding the right fit has been key to our success.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "kenneth@wrim.com"
    }
  },
  {
    id: 4,
    name: "Lucille Janzen",
    role: "Sales Leader",
    title: "Driving Growth & Relationships",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "Lucille leads our sales strategy, building lasting relationships with clients who value technology that stands the test of time. Her approach focuses on understanding client needs and delivering solutions that truly matter.",
    detailedDescription: "Lucille's passion for building meaningful connections has helped us grow our client base while maintaining the highest standards of service. She believes in selling solutions that create lasting value, aligning perfectly with our mission of building immortal technology.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lucille@wrim.com"
    }
  },
  {
    id: 5,
    name: "Sarah Chen",
    role: "CTO",
    title: "Engineering Excellence",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    description: "Sarah oversees our technical strategy, ensuring our technology stack is future-proof and scalable. Her engineering expertise drives innovation in every product we build.",
    detailedDescription: "With a deep understanding of both current and emerging technologies, Sarah ensures our solutions are built on solid foundations that will evolve with the times. Her leadership in technical excellence is fundamental to our mission.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@wrim.com"
    }
  },
  {
    id: 6,
    name: "Marcus Rodriguez",
    role: "Product Manager",
    title: "Shaping Innovation",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    description: "Marcus bridges the gap between vision and execution, turning ideas into products that matter. His strategic thinking ensures we build solutions that truly stand the test of time.",
    detailedDescription: "Marcus combines market insights with technical understanding to guide our product development. His focus on long-term value ensures every feature we build contributes to our goal of creating immortal technology.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "marcus@wrim.com"
    }
  },
];

export default function OurTeam() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Track current slide from carousel API
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const selected = api.selectedScrollSnap();
      setCurrentIndex(selected);
    };

    api.on("select", onSelect);
    onSelect(); // Initialize

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Calculate position relative to current center for blur effect
  const getMemberPosition = (index: number): number => {
    const diff = index - currentIndex;
    if (Math.abs(diff) <= teamMembers.length / 2) {
      return diff;
    }
    return diff > 0 ? diff - teamMembers.length : diff + teamMembers.length;
  };

  const expandedMember = expandedId 
    ? teamMembers.find(m => m.id === expandedId) 
    : null;

  const handleKnowMore = (memberId: number) => {
    if (expandedId === memberId) {
      setExpandedId(null); // Close if already expanded
    } else {
      setExpandedId(memberId); // Expand the clicked member
    }
  };

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
    setExpandedId(null);
  };

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/5 dark:bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-950/50 dark:to-orange-950/50 rounded-full border border-blue-200/50 dark:border-blue-800/50"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Meet Our Team
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block mb-2 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
              The People Behind
            </span>
            <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
              Immortal Technology
            </span>
          </h2>
        </motion.div>

        {/* Expanded Member Section */}
        <AnimatePresence mode="wait">
          {expandedMember && (
            <motion.div
              key={expandedMember.id}
              initial={{ opacity: 0, y: 30, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -30, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                About our company
              </h3>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Member Image */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={expandedMember.image}
                      alt={expandedMember.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </div>

                {/* Member Content */}
                <div className="flex-1 space-y-6">
                  <div className="inline-block px-4 py-2 border-2 border-gray-800 dark:border-gray-200 rounded-lg text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {expandedMember.role}
                  </div>
                  
                  <h4 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                    {expandedMember.name}
                  </h4>
                  
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
                    {expandedMember.title}
                  </p>
                  
                  <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>{expandedMember.description}</p>
                    <p>{expandedMember.detailedDescription}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={expandedMember.social.linkedin}
                      className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={expandedMember.social.twitter}
                      className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${expandedMember.social.email}`}
                      className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Show Less Button */}
                  <button
                    onClick={() => handleKnowMore(expandedMember.id)}
                    className="mt-6 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg"
                  >
                    Show Less
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Navigation Buttons */}

            {/* Carousel */}
            <Carousel
                setApi={setApi}
                opts={{
                align: "center",
                loop: true,
                }}
                className="w-full relative"
            >
                <div className="relative px-12 md:px-16">
                <CarouselContent>
                    {
                        teamMembers.map((member, index) => {
                        const isExpanded = expandedId === member.id;
                        const position = getMemberPosition(index);
                        const isSideCard = Math.abs(position) === 2;

                        return (
                            <CarouselItem key={member.id} className="basis-full md:basis-1/3">
                            <motion.div
                                layout
                                animate={{ 
                                scale: isSideCard ? 0.85 : 1,
                                opacity: isSideCard ? 0.4 : 1,
                                zIndex: isExpanded ? 50 : isSideCard ? 1 : 3
                                }}
                                transition={{ 
                                layout: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                                scale: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                                opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                                }}
                                className={cn(
                                "relative rounded-2xl overflow-hidden will-change-transform h-full",
                                isExpanded
                                    ? "shadow-2xl border-2 border-blue-400 dark:border-blue-600"
                                    : "shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl",
                                isSideCard && "blur-sm brightness-75 dark:brightness-50"
                                )}
                            >
                                <div className="bg-white dark:bg-slate-800 p-4 md:p-6">
                                {/* Image */}
                                <div className="relative rounded-xl overflow-hidden mb-4">
                                    <div className="relative h-64 rounded-xl overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    
                                    {/* Role Badge */}
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <div className="inline-block px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200">
                                        {member.role}
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <div>
                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                                        {member.name}
                                    </h4>
                                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                                        {member.title}
                                    </p>
                                    </div>

                                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                    {member.description}
                                    </p>

                                    {/* Know More Button */}
                                    <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (!isSideCard) {
                                        handleKnowMore(member.id);
                                      }
                                    }}
                                    disabled={isSideCard}
                                    className={cn(
                                        "w-full mt-4 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300",
                                        isSideCard
                                        ? "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed opacity-50"
                                        : isExpanded
                                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                                        : "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg"
                                    )}
                                    >
                                    {isExpanded ? "Show Less" : "Know More"}
                                    </button>
                                </div>
                                </div>
                            </motion.div>
                            </CarouselItem>
                        );
                        })
                    }
                </CarouselContent>
                
                <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:scale-110 transition-all duration-300" />
                <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/50 hover:scale-110 transition-all duration-300" />
                </div>
            </Carousel>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {teamMembers.map((_, index) => {
                const isActive = currentIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      // Clear any expanded state when manually navigating
                      if (expandedId !== null) {
                        setExpandedId(null);
                      }
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 ease-in-out",
                      isActive
                        ? "w-8 bg-gradient-to-r from-blue-600 to-orange-500"
                        : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>

        
        </motion.div>

        
      </div>
    </section>
  );
}
