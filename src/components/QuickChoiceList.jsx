
function QuickChoiceList({ quickChoices }) {
    return (
        <>
            <div className='quick-choice-list'>
                <ul>
                    {quickChoices.map((choice, index) => (
                        <li key={index}>
                            <a href={choice.link}>{choice.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default QuickChoiceList