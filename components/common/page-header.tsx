import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface PageHeaderProps {
  title: string
  description?: string
  backHref?: string
  backLabel?: string
  actions?: React.ReactNode
}

export function PageHeader({ title, description, backHref, backLabel, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex items-center justify-between">
        {backHref && (
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href={backHref}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">{backLabel || "Back"}</span>
            </Link>
          </Button>
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  )
}
