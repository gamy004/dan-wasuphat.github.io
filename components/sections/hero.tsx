"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";

export function Hero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center space-x-2 text-sm font-mono text-primary"
        >
          <span>&lt;Hello World /&gt;</span>
        </motion.div>
        <div className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-mono min-h-[1.2em] flex flex-col items-start">
          <Typewriter delay={0.5} duration={1.5}>
            I&apos;m Wasuphat Pudjaika
          </Typewriter>
          <div className="mt-2">
            <Typewriter delay={2.0} duration={1.5} className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Software Engineer & Data Expert
            </Typewriter>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.5 }}
          className="max-w-[700px] text-lg text-muted-foreground sm:text-xl font-mono"
        >
          Senior Software Engineer with a Master&apos;s in Computer Engineering. Specializing in high-scale web applications, data engineering, and agile development.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3.7 }}
        className="flex gap-4"
      >
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
          <Link href="#projects">
            View Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild className="border-primary/20 hover:bg-primary hover:text-primary-foreground font-mono">
          <Link href="/Profile.pdf" target="_blank">
            Download Resume <Download className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
      
      <div className="absolute right-10 top-1/2 -z-10 hidden lg:block opacity-20 transform -translate-y-1/2">
         <Cpu size={400} className="text-primary animate-pulse" />
      </div>
    </section>
  );
}
