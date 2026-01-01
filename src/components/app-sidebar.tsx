"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Sample data with Indonesian labels and working links
const initialData = {
  user: {
    name: "User",
    email: "user@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "Leafiess inc.",
      logo: GalleryVerticalEnd,
      plan: "Grup Admin",
    },
  ],
  navMain: [
    {
      title: "Beranda",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Ringkasan",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Manajemen",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "NutriPlanner",
          url: "/modules/nutriplanner",
        },
        {
          title: "Inventaris",
          url: "/modules/inventory",
        },
        {
          title: "Dapur",
          url: "/modules/kitchen",
        },
      ],
    },
    {
      title: "Keuangan",
      url: "#",
      icon: PieChart,
      items: [
        {
          title: "Laporan",
          url: "/modules/finance",
        },
      ],
    },
    {
      title: "Pengaturan",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Umum",
          url: "#",
        },
        {
          title: "Profil",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Proyek Leafiess",
      url: "#",
      icon: Frame,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [userData, setUserData] = useState(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      const parsed = JSON.parse(savedUser)
      return {
        name: parsed.name || "User",
        email: parsed.email || "",
        avatar: parsed.avatar || "https://github.com/shadcn.png"
      }
    }
    return initialData.user
  })

  useEffect(() => {
    const handleStorageChange = () => {
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        const parsed = JSON.parse(savedUser)
        setUserData({
          name: parsed.name || "User",
          email: parsed.email || "",
          avatar: parsed.avatar || "https://github.com/shadcn.png"
        })
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={initialData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={initialData.navMain} />
        <NavProjects projects={initialData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
