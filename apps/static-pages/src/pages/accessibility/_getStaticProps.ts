import { serialize } from 'next-mdx-remote/serialize';

export async function getStaticProps() {
	const source = `Welcome to the absolutholz Arcade!

    I'm thrilled to have you here, ready to dive into the world of online games and endless fun. As the sole creator and curator of this humble online arcade, accessibility and inclusivity are close to my heart.
    
    ## The Quest for Accessibility
    
    I may be just one person behind this magical collection of games, but I'm determined to make the absolutholz Arcade as inclusive as possible. I understand that not all games can be made fully accessible, but I promise to try my best to ensure that everyone can enjoy a delightful gaming experience.
    
    ## Games for All, Games for Fun
    
    In this digital playground, you'll find a variety of games, each with its unique charm and challenge. While some games may present accessibility obstacles, I'm actively working to provide alternative versions or gameplay options to accommodate diverse needs.
    
    ## Open to Suggestions and Feedback
    
    Your journey through the absolutholz Arcade matters greatly to me. If you encounter any barriers or have ideas on how I can enhance accessibility for certain games, please don't hesitate to share your thoughts. Your insights will guide me on this never-ending quest for improvement.
    
    ## Inclusivity: Our Shared Adventure
    
    I believe that inclusivity is not a solo quest; it's a shared adventure. Together, we can explore ways to make this arcade more accessible and welcoming for all players. Your presence and support are invaluable as I strive to create a place where everyone can find joy and entertainment.
    
    ## Thank You for Being Here
    
    Before you embark on your gaming escapades, I want to express my deepest gratitude for joining me in this endeavor. Your visit to the absolutholz Arcade fills my heart with joy, and I hope these games bring a smile to your face.
    
    I'll keep working hard to ensure that this digital realm remains a playful and inviting space for all visitors. Let's make the magic of games accessible to as many players as possible, one step at a time.
    
    Wishing you endless hours of enjoyment and excitement,
    
    absolutholz - Guardian of the Arcade`;

	const mdxSource = await serialize(source);
	return { props: { source: mdxSource } };
}
