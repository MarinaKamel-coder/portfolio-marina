import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-mono font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default select-none",
  {
    variants: {
      variant: {
        // Badge principal (ex: "Stage") -> Fond violet translucide éclatant
        default:
          "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20",
        // Badge secondaire 
        secondary:
          "border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20",
        // Badge d'erreur / critique
        destructive:
          "border-destructive/30 bg-destructive/10 text-destructive-foreground hover:bg-destructive/20",
        // Badge contour neutre (ex: Les technos d'un projet) 
        outline: 
          "border-border/60 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }