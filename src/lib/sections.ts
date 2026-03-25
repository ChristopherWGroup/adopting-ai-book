export interface Section {
  id: string
  title: string
  description: string
}

export const sections: Section[] = [
  {
    id: 'awareness',
    title: 'Awareness',
    description:
      'Most business owners are already competing against AI without realizing it. This section cuts through the hype to explain what AI actually is, pattern recognition rather than magic, and reframes the central question from "Should I use AI?" to "Where can it give me leverage?" The shift is real and already underway.',
  },
  {
    id: 'readiness',
    title: 'Readiness',
    description:
      'Most AI failures are not about the technology. They are about what the technology walks into. This section helps you assess whether your processes are documented, your data is consistent, and your workflows are clear enough to give AI something solid to work with, and where to start if they are not.',
  },
  {
    id: 'execution',
    title: 'Execution',
    description:
      'Choosing the wrong tool is rarely the problem. Starting without a defined outcome almost always is. This section walks through how to evaluate tools without getting distracted, how to build measurement into your workflow before you deploy, and how to tell the difference between feeling productive and actually moving the needle.',
  },
  {
    id: 'leadership',
    title: 'Leadership',
    description:
      'Using AI well is not just a technology decision. It is a leadership one. This section covers how to protect your business from data privacy risks and overreliance, how to choose the right adoption path for your team, and how to keep humans accountable for the decisions that matter most.',
  },
  {
    id: 'future-positioning',
    title: 'Future Positioning',
    description:
      'There is no finish line. AI is a capability you build over time, not a project you complete. This section helps you stay current without chasing every trend, run experiments that generate real learning, and build the kind of adaptability that compounds as the tools keep changing.',
  },
]
