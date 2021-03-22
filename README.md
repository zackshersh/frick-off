# Unit 7: Project 1 
The Little A**hole       
#Group 3: Zach, Mike, Ian & Will   

## Overview 
Our website presents a simple and unique character, "The Little A**hole". The poor fellow is perpetually trapped and pacing inside a yellow box, forced to hear any questions presented by front-end users. Despite his soured mood, he faithfully and petulantly supplies answers to any of your queries, pressing or frivolous. 

## Git Branch Workflow
main branch 
--- 
zack [zackshersh] 
Mr-Krabs'-F***-You-Simulator [Lolikerz]
Michael's-Branch [MichaelDameron]
doubleyoo-patch-1 [doubleyoo]

## API's used in this project
1. IBM’s Watson Natural Language Understanding API
2. Yes / No 
3. HTML Canvas Client-side API

## Other Tech used in this project
1. Bulma CSS Framework
2. Google Fonts 
3. Bootstrap [jquery]

## User experience
1. User submits a question.
2. YesNo dictates the character’s answer.
3. Watson analyzes content of question and pulls out keywords to fit the character’s response.
4. The character is animated and acts according to a set of states which change along with user input, including recognition of repeated questions.

## Minimum viable product
1. Front-end user story 
2. Question entry form
3. Answer button that gives an automated response in a pop-up window

## Bells & whistles
1. Animated character paces, "listens" to typed questions & responds while trapped in a box
2. The character remembers previously asked questions and is anoyed by their repitition. 

## Bugs we encountered along the way
1. We were originally inspired by a vulgar API, FOAAS. We hoped to incorporate it’s insults but it required too many edits for the classroom setting.

2. The YesOrNo and Watson API’s are both defined as variables in two separate functions. It was difficult to figure out how to get information from both functions to integrate the user’s input into logical and naturally phrased responses. 

## Fixes applied to the bugs 
1. Ultimately, we ended up dropping it, and instead used the Watson Language API to create a unique array of PG-13 insults. This system worked in the way we originally visioned

2. We created 4 arrays of insults - one array for each possible response. With these 4 arrays, the insults are presented on the webpage, depending on the API functions prompted by user input.

## What is agile software development?
In software development, agile (sometimes written Agile)[1] practices involve discovering requirements and developing solutions through the collaborative effort of self-organizing and cross-functional teams and their customer(s)/end user(s).[2] It advocates adaptive planning, evolutionary development, early delivery, and continual improvement, and it encourages flexible responses to change. [Wikipedia] https://en.wikipedia.org/wiki/Agile_software_development

## How did we apply this approach?
- We allowed everyone the space to brainstorm and present ideas without judgement [obviously] 
- We focused the ideas into a single, clear goal
- We delegated tasks based on everyone’s strengths
- We communicated issues we encountered as we went along, listened to each other and helped find solutions 
- We pivoted, found new approaches and made adjustments when our original plans did not seem to feasible

## Merge Conflicts
1. Examine the 2+ pieces of code together
2. A] If the newly pushed code is compatible with the established code, then go ahead & merge it with the main branch.
B] If it is incompatible, then sort through the code again, compile & format all necessary pieces, then repeat step 1 
