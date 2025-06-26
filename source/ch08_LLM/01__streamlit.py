import streamlit as st

st.set_page_config(page_title="첫번째 프로그램")

st.title("나의 첫 strealit 앱")
st.subheader("웹 앱을 만들기 위한 강력한 라이브러리 : streamlit")

name = st.text_input("이름을 입력하세요")
if name:
    st.write(f"안녕하세요, {name}님!")

st.text("text 출력")
