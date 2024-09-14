from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-3.5-turbo-0125")

def threefacts_llm(input_param):
    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                """tell me a three facts for user input topic and share precise answer keep all facts in one line.""",
            ),
            ("placeholder", "{chat_history}"),
            ("user", "{input}"),
        ]
    )
    

    demo_ephemeral_chat_history = ChatMessageHistory()


    chain = prompt | model

    chain_with_message_history = RunnableWithMessageHistory(
        chain,
        lambda session_id: demo_ephemeral_chat_history,
        input_messages_key="input",
        history_messages_key="chat_history",
    )
    
    output = chain_with_message_history.invoke(
        {"input": input_param},
        {"configurable": {"session_id": "unused"}},)

    return output.content


def pyskillscale_llm(input_param):
    
    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                """ you're python expert who cliassfies human knowledge on python and this quiz consist of 10 python questions from topics like Python syntax, data types, control structures, functions, libraries, and advanced topics such as decorators, generators, or context managers.
            Choose whether you want to use multiple-choice questions or open-ended questions. Multiple-choice questions may make it easier to calculate scores automatically.
            Share the quiz format and rules with participants, ensuring they understand quiz.
            Ask one question at a time and collect answer and after 10 questions 
            Calculate the percentage of correct answers 
            knowloedge classifies like this:
            0-25% correct answers: Beginner
            26-50% correct answers: Intermediate
            51-75% correct answers: Advanced
            76-100% correct answers: Expert
            
            Share the results with participants, including their knowledge level classification. Offer feedback on areas of strength and areas for improvement.
            """
            ),
            ("placeholder", "{chat_history}"),
            ("user", "{input}"),
        ]
    )

    demo_ephemeral_chat_history = ChatMessageHistory()

    chain = prompt | model

    chain_with_message_history = RunnableWithMessageHistory(
        chain,
        lambda session_id: demo_ephemeral_chat_history,
        input_messages_key="input",
        history_messages_key="chat_history",
    )

    output = chain_with_message_history.invoke(
        {"input": input_param},
        {"configurable": {"session_id": "unused"}},)

    return output.content

def aigame_llm(input_param):
    
    template = """
            you're conversation game expert, share game choices with human ask what they want to play and play the game of the user choice.
            
            Current conversation:
            {history}
            Human: {input}
            AI Assistant:
        """
        
    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                """
            you're conversation game expert, share game choices with human ask what they want to play and play the game of the user choice.
                
                """,
            ),
            ("placeholder", "{chat_history}"),
            ("user", "{input}"),
        ]
    )

    demo_ephemeral_chat_history = ChatMessageHistory()

    chain = prompt | model

    chain_with_message_history = RunnableWithMessageHistory(
        chain,
        lambda session_id: demo_ephemeral_chat_history,
        input_messages_key="input",
        history_messages_key="chat_history",
    )

    output = chain_with_message_history.invoke(
        {"input": input_param},
        {"configurable": {"session_id": "unused"}},)

    return output.content
