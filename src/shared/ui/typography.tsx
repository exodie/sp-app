import * as React from 'react'

import { cn } from '../lib/utils'

export interface TypographyHeading
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export interface TypographyParagraph
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export interface TypographyBlackqoute
  extends React.DetailedHTMLProps<
    React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  > {}

export interface TypograpyElement
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

function H1({ className, ...props }: TypographyHeading) {
  return (
    <h1
      {...props}
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
    />
  )
}
H1.displayName = 'H1'

function H2({ className, ...props }: TypographyHeading) {
  return (
    <h2
      {...props}
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
    />
  )
}
H2.displayName = 'H2'

function H3({ className, ...props }: TypographyHeading) {
  return (
    <h3
      {...props}
      className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}
    />
  )
}
H3.displayName = 'H3'

function H4({ className, ...props }: TypographyHeading) {
  return (
    <h4
      {...props}
      className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}
    />
  )
}
H4.displayName = 'H4'

function Paragraph({ className, ...props }: TypographyParagraph) {
  return (
    <p {...props} className={cn('leading-7 [&:not(:first-child)]:mt-2', className)} />
  )
}
Paragraph.displayName = 'Paragraph'

function Blockquote({ className, ...props }: TypographyBlackqoute) {
  return (
    <blockquote {...props} className={cn('mt-6 border-l-2 pl-6 italic', className)} />
  )
}
Blockquote.displayName = 'Blockquote'

function Code({ className, ...props }: TypograpyElement) {
  return (
    <code
      {...props}
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className
      )}
    />
  )
}
Code.displayName = 'Code'

export { H1, H2, H3, H4, Paragraph, Blockquote, Code }
