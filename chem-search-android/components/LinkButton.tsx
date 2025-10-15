import styles from '@/constants/Styles'
import { Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'

/*
Component: Button that lets you switch to a different route using link asChild prop
*/

type LinkButtonProps = {
    link: string
    label: string
    marginVertical?: number
    marginHorizontal?: number
    buttonStyle?: StyleProp<ViewStyle> | undefined
    textStyle?: StyleProp<TextStyle> | undefined
}

const LinkButton = (props: LinkButtonProps) => {

    const flattenedStyle = StyleSheet.flatten([styles.button, props.buttonStyle]);  // FIXME: ugly workaround for default styles because style array isnt recognized from DOM? or problem with asChild?, problem: attributes can persist from default style
    return (
    <Link 
        href={props.link as any} 
        style={{marginVertical: props.marginVertical ?? 20, marginHorizontal: props.marginHorizontal ?? 100}} 
        asChild
    >
        <Pressable style={flattenedStyle}>
            <Text style={[styles.buttonText, props.textStyle]}>{props.label}</Text>
        </Pressable>
    </Link>
  )
}



export default LinkButton