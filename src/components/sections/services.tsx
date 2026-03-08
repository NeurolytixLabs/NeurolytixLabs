"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Workflow,
  Megaphone,
  FolderCog,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  CreditCard,
  Users,
  FileText,
  BarChart3,
  Send,
  Paperclip,
  Image,
  Search,
  Sparkles,
  Mail,
  Linkedin,
  Calendar,
  MessageSquare,
} from "lucide-react";

/* ─────────────────────────── Task List Mock ─────────────────────────── */

interface TaskItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  statusColor: string;
}

const tasks: TaskItem[] = [
  {
    title: "Payroll management",
    subtitle: "Due on 2nd july",
    icon: <CreditCard className="w-4 h-4 text-blue-400" />,
    statusColor: "bg-blue-400",
  },
  {
    title: "Employee Tracking",
    subtitle: "2 days ago",
    icon: <Users className="w-4 h-4 text-emerald-400" />,
    statusColor: "bg-emerald-400",
  },
  {
    title: "Social media post",
    subtitle: "Cancelled by user",
    icon: <XCircle className="w-4 h-4 text-red-400" />,
    statusColor: "bg-red-400",
  },
  {
    title: "Lead list",
    subtitle: "70% prepared",
    icon: <BarChart3 className="w-4 h-4 text-amber-400" />,
    statusColor: "bg-amber-400",
  },
  {
    title: "Payment reminder",
    subtitle: "sent to selected clients",
    icon: <AlertCircle className="w-4 h-4 text-violet-400" />,
    statusColor: "bg-violet-400",
  },
];

function TaskListMock() {
  return (
    <div className="w-full max-w-[280px] mx-auto rounded-xl border border-border bg-surface p-3 shadow-lg shadow-black/20">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-foreground">All Tasks</span>
        <span className="text-[10px] text-muted-foreground">
          Waiting for approval
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        {tasks.map((task, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-background/60 border border-border/50 hover:border-primary/20 transition-colors duration-200"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-muted/60 shrink-0">
              {task.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-medium text-foreground truncate">
                {task.title}
              </p>
              <p className="text-[9px] text-muted-foreground truncate">
                {task.subtitle}
              </p>
            </div>
            <div
              className={cn("w-1.5 h-1.5 rounded-full shrink-0", task.statusColor)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── AI Chat Mock ─────────────────────────── */

function AIChatMock() {
  return (
    <div className="w-full max-w-[300px] mx-auto rounded-xl border border-border bg-surface p-3 shadow-lg shadow-black/20">
      <div className="flex flex-col gap-3">
        {/* Chat input area */}
        <div className="rounded-lg border border-border bg-background/60 p-3">
          <p className="text-[11px] text-muted-foreground mb-2">
            What can I help with?
          </p>
          <p className="text-[11px] text-foreground/80 leading-relaxed">
            Weather you want help in customer handling or make changes in your
            system just give me command
            <span className="inline-block w-0.5 h-3 bg-primary ml-0.5 animate-blink align-middle" />
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-1.5">
          {[
            { label: "Add document", icon: <Paperclip className="w-3 h-3" /> },
            { label: "Analyze", icon: <Search className="w-3 h-3" /> },
            { label: "Generate Image", icon: <Image className="w-3 h-3" /> },
            { label: "Research", icon: <Sparkles className="w-3 h-3" /> },
          ].map((action, i) => (
            <div
              key={i}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted/50 border border-border/50 text-[9px] text-muted-foreground"
            >
              {action.icon}
              {action.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── Outreach / Email Mock ────────────────────── */

interface FounderItem {
  name: string;
  email: string;
  company: string;
}

const founders: FounderItem[] = [
  { name: "Jack Daniel", email: "justin@main.com", company: "Xavier LLC" },
  { name: "Gorge Chapel", email: "gorge@mail.com", company: "Chapel LLC" },
  { name: "Mike Tylor", email: "mike@Cmb.com", company: "CMB LLC" },
  { name: "Thomas Shelby", email: "Thimas@Sby.com", company: "Shelby.co" },
];

function OutreachMock() {
  return (
    <div className="w-full max-w-[300px] mx-auto rounded-xl border border-border bg-surface p-3 shadow-lg shadow-black/20">
      {/* Header bar */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/15 border border-primary/20">
          <Send className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-medium text-primary">
            E-mail Sending..
          </span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted/50 border border-border/50">
          <Linkedin className="w-3 h-3 text-blue-400" />
          <span className="text-[10px] text-muted-foreground">LinkedIn</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-3 text-[10px] text-muted-foreground">
        <span className="px-2 py-0.5 rounded bg-muted/50 border border-border/50">
          IT services
        </span>
        <span className="px-2 py-0.5 rounded bg-primary/15 text-primary border border-primary/20">
          Founders
        </span>
      </div>

      {/* Founder list */}
      <div className="flex flex-col gap-1.5 max-h-[160px] overflow-hidden">
        {founders.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-background/60 border border-border/50"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/40 to-violet-500/40 flex items-center justify-center text-[9px] font-bold text-foreground shrink-0">
              {f.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <p className="text-[10px] font-medium text-foreground truncate">
                  {f.name}
                </p>
                <span className="text-[8px] text-muted-foreground">Founder</span>
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
              </div>
              <p className="text-[8px] text-muted-foreground truncate">
                {f.email} · {f.company}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer tabs */}
      <div className="flex items-center gap-2 mt-3 text-[10px]">
        {["Draft", "Schedule", "Sent"].map((tab, i) => (
          <span
            key={tab}
            className={cn(
              "px-2 py-0.5 rounded",
              i === 2
                ? "bg-primary/15 text-primary border border-primary/20"
                : "text-muted-foreground"
            )}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────── Custom Project Mock ────────────────────── */

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function CustomProjectMock() {
  return (
    <div className="w-full max-w-[280px] mx-auto rounded-xl border border-border bg-surface p-3 shadow-lg shadow-black/20">
      {/* Greeting */}
      <div className="mb-3">
        <p className="text-[11px] font-semibold text-foreground">Hey David!</p>
        <p className="text-[9px] text-muted-foreground mt-0.5">
          Here is your Custom project &amp; schedule
        </p>
      </div>

      {/* Ongoing project */}
      <div className="rounded-lg bg-background/60 border border-border/50 p-2.5 mb-3">
        <p className="text-[9px] text-muted-foreground mb-1">
          On going project :
        </p>
        <p className="text-[11px] font-medium text-foreground mb-1.5">
          Customer Support Chatbot
        </p>
        <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-violet-400"
            style={{ width: "90%" }}
          />
        </div>
        <p className="text-[8px] text-primary mt-1 text-right">90% Finished</p>
      </div>

      {/* Schedule */}
      <div className="rounded-lg bg-background/60 border border-border/50 p-2.5">
        <p className="text-[10px] font-semibold text-foreground mb-2">
          Schedule
        </p>
        {/* Day selector */}
        <div className="flex items-center gap-1 mb-2.5">
          {weekDays.map((day, i) => (
            <div
              key={day}
              className={cn(
                "flex-1 text-center py-1 rounded text-[8px] font-medium transition-colors",
                i === 2
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {day}
            </div>
          ))}
        </div>
        {/* Events */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-muted/40 border border-border/40">
            <Calendar className="w-3 h-3 text-primary shrink-0" />
            <div>
              <p className="text-[9px] font-medium text-foreground">
                Discovery call
              </p>
              <p className="text-[8px] text-muted-foreground">
                10:00 am to 10:30 am
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-muted/40 border border-border/40">
            <FolderCog className="w-3 h-3 text-violet-400 shrink-0" />
            <div>
              <p className="text-[9px] font-medium text-foreground">
                Custom automation
              </p>
              <p className="text-[8px] text-muted-foreground">
                06:00 pm to 06:30 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── Service Card Layout ────────────────────── */

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  children: React.ReactNode;
  reverse?: boolean;
}

function ServiceCard({
  icon,
  title,
  description,
  tags,
  children,
  reverse = false,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 overflow-hidden",
        reverse && "lg:[direction:rtl]"
      )}
    >
      {/* Subtle glow on hover */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle,rgba(109,59,255,0.04)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Text content */}
      <div className={cn("flex flex-col gap-4", reverse && "lg:[direction:ltr]")}>
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="muted"
              className="text-[10px] sm:text-xs px-2.5 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Mock UI */}
      <div
        className={cn(
          "relative flex items-center justify-center py-4",
          reverse && "lg:[direction:ltr]"
        )}
      >
        {children}
      </div>
    </div>
  );
}

/* ─────────────────── Main Services Section ─────────────────── */

export function Services() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 section-gradient"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <SectionHeading
          badge="Our Services"
          title="AI Solutions That Take Your Business to the"
          highlightedText="Next Level"
          description="We design, develop, and implement automation tools that help you work smarter, not harder"
        />

        {/* Service Cards */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* 1 – Workflow Automation */}
          <ServiceCard
            icon={<Workflow className="w-5 h-5" />}
            title="Automate repetitive tasks"
            description="We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains — saving time and cutting down errors."
            tags={["Internal Task Bots", "100+ Automations"]}
          >
            <TaskListMock />
          </ServiceCard>

          {/* 2 – AI Assistant */}
          <ServiceCard
            icon={<Bot className="w-5 h-5" />}
            title="Delegate Daily Tasks"
            description="From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster."
            tags={["Summaries", "Scheduling", "Many more"]}
            reverse
          >
            <AIChatMock />
          </ServiceCard>

          {/* 3 – Sales & Marketing */}
          <ServiceCard
            icon={<Megaphone className="w-5 h-5" />}
            title="Accelerate Sales Growth"
            description="AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence."
            tags={["Leads", "Content", "Social post"]}
          >
            <OutreachMock />
          </ServiceCard>

          {/* 4 – Custom Projects */}
          <ServiceCard
            icon={<FolderCog className="w-5 h-5" />}
            title="Build Smarter Systems"
            description="Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals."
            tags={["Strategy", "Custom AI", "Consulting"]}
            reverse
          >
            <CustomProjectMock />
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
