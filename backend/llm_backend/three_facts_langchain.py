import os
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI
from langchain.chains.conversation.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from langchain.memory.chat_message_histories import RedisChatMessageHistory

os.environ['OPENAI_API_KEY'] = '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'


def threefacts_llm(input_param):
    
    model = OpenAI()
    template = """
            tell me a three facts for user input topic and share precise answer keep all facts in one line.
            
            Current conversation:
            {history}
            Human: {input}
            AI Assistant:
        """
        
    prompt = PromptTemplate(input_variables=["history", "input"], template= template)

    message_history = RedisChatMessageHistory(
                # redis://[[username]:[password]]@localhost:6379/0
        url="redis://default:CLQpVFLwQVoChpnrB47C6Hx16H5qpFNh@redis-11233.c212.ap-south-1-1.ec2.cloud.redislabs.com:11233", ttl=600, session_id="my-session"
    )

    memory = ConversationBufferMemory(
        memory_key="history", ai_prefix="AI Assistant",chat_memory=message_history
    )
    conversation = ConversationChain(
        llm=model,
        prompt=prompt,
        memory= memory
    )

    return conversation.run(input_param)


def pyskillscale_llm(input_param):
    
    model = OpenAI()
    template = """
            you're python expert who cliassfies human knowledge on python and this quiz consist of 10 python questions from topics like Python syntax, data types, control structures, functions, libraries, and advanced topics such as decorators, generators, or context managers.
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
            
            Current conversation:
            {history}
            Human: {input}
            AI Assistant:
        """
        
    prompt = PromptTemplate(input_variables=["history", "input"], template= template)

    message_history = RedisChatMessageHistory(
                # redis://[[username]:[password]]@localhost:6379/0
        url="redis://default:CLQpVFLwQVoChpnrB47C6Hx16H5qpFNh@redis-11233.c212.ap-south-1-1.ec2.cloud.redislabs.com:11233", ttl=600, session_id="py-skiil-scale"
    )

    memory = ConversationBufferMemory(
        memory_key="history", ai_prefix="AI Assistant",chat_memory=message_history
    )
    conversation = ConversationChain(
        llm=model,
        prompt=prompt,
        memory= memory
    )

    return conversation.run(input_param)

def aigame_llm(input_param):
    
    model = OpenAI()
    template = """
            you're conversation game expert, share game choices with human ask what they want to play and play the game of the user choice.
            
            Current conversation:
            {history}
            Human: {input}
            AI Assistant:
        """
        
    prompt = PromptTemplate(input_variables=["history", "input"], template= template)

    message_history = RedisChatMessageHistory(
                # redis://[[username]:[password]]@localhost:6379/0
        url="redis://default:CLQpVFLwQVoChpnrB47C6Hx16H5qpFNh@redis-11233.c212.ap-south-1-1.ec2.cloud.redislabs.com:11233", ttl=600, session_id="ai-game"
    )

    memory = ConversationBufferMemory(
        memory_key="history", ai_prefix="AI Assistant",chat_memory=message_history
    )
    conversation = ConversationChain(
        llm=model,
        prompt=prompt,
        memory= memory
    )

    return conversation.run(input_param)

  