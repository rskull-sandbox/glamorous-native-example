import React from 'react'
import glamorous, { View, Text } from 'glamorous-native'
import styled from 'styled-components/native'

const StyledText = styled.Text`
  fontSize: 20;
  color: red;
`

const GlamorousText = glamorous.text({
  fontSize: 20,
  color: 'red'
})

const MyText = glamorous.text(
  {
    fontSize: 20,
    color: 'red'
  },
  (props) => ({
    fontWeight: props.noBold ? 'normal' : 'bold'
  })
)

const MyTextComp = glamorous(MyText)({ fontStyle: 'italic' })

export default class Example extends React.Component {
  render() {
    return (
      <View margin={20}>
        <Text color="red" fontSize={20}>
          glamorous Text!!
        </Text>
        <GlamorousText>
          glamorous text2!!
        </GlamorousText>
        <StyledText>
          styled-components Text!!
        </StyledText>
        <MyText>
          MyText bold!
        </MyText>
        <MyText noBold>
          MyText noBold!
        </MyText>
        <MyTextComp>
          My text comp!
        </MyTextComp>
      </View>
    )
  }
}
