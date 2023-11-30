import faqJSON from '../faq.json';

function FAQPage() {


    return (
        <div className='body'>
            <h1>FAQ</h1>
            {faqJSON.map(faq => (
                <>
                    <h2>{faq.question}</h2>
                    <p>{faq.answer}</p>
                </>

            ))}
        </div>
    );
}


export default FAQPage;