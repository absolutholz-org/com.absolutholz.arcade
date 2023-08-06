import { serialize } from 'next-mdx-remote/serialize';

export async function getStaticProps() {
	const source = `Greetings, Players of the absolutholz Arcade!
    
    Your privacy is as important to me as the pixels that bring these games to life. As the creator and protector of this online arcade, I want to assure you that your data is treated with the utmost care and respect.
    
    ## Data Collection and Purpose    
    When you step into the absolutholz Arcade, I may collect some data, but fear not, it's only for the purpose of gameplay. I want to ensure that your gaming experience is smooth and enjoyable. The data I collect is limited to what is necessary to provide you with access to the games and to save your progress within them.
    
    ## No Sharing with Third Parties    
    Your data is your treasure, and I have no intention of sharing it with anyone else. Rest assured that I do not disclose any user data to third parties, except for authentication purposes when you sign in to access your saved games and achievements securely.
    
    ## No User Interaction Tracking    
    Just like a friendly ghost, I don't haunt or track your every move. I believe in granting you the freedom to explore the absolutholz Arcade without any digital footprints following you. There are no trackers or surveillance lurking here. Your gaming adventures are yours to enjoy privately.
    
    ## Data Security and Protection    
    The data you entrust to the absolutholz Arcade is guarded against unauthorized access, loss, or misuse. I have taken measures to secure your information and keep it safe within the confines of this digital realm.
    
    ## A Safe Haven for Young Adventurers    
    If you're a young player visiting the absolutholz Arcade, know that I take special care to create a safe environment for you. I encourage all young adventurers to seek parental consent before exploring the games here.
    
    ## Continuous Improvement    
    While I am a humble one-person team, I'm committed to continuously improving the privacy measures in place. As technology evolves and new challenges arise, I'll do my best to adapt and enhance privacy practices accordingly.
    
    ## Contact Me    
    If you have any questions, concerns, or simply want to say hello, don't hesitate to reach out. You can contact me at [Your Contact Email].
    
    Thank you for joining me in the absolutholz Arcade. Together, we'll ensure that your gaming experience remains private, secure, and filled with endless delight.
    
    Happy gaming,
    
    absolutholz - Guardian of the Arcade`;

	const mdxSource = await serialize(source);
	return { props: { source: mdxSource } };
}
