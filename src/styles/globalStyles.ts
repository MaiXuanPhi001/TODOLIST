import { Platform, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fontFamilies } from "../constants/fontFamilies";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        padding: 20,
        paddingTop: Platform.OS === 'ios' ? 42 : 32,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        fontFamily: fontFamilies.regular,
        color: colors.text,
    },
    inputContainer: {
        backgroundColor: colors.gray,
        borderRadius: 12,
        paddingHorizontal: Platform.OS === 'ios' ? 12 : 10,
        paddingVertical: Platform.OS === 'ios' ? 12 : 10,
    },
    section: {
        marginBottom: 16,
    },
    tag: {
        paddingHorizontal: 20,
        paddingVertical: Platform.OS === 'ios' ? 6 : 4,
        backgroundColor: colors.blue,
        borderRadius: 100,
    },
    card: {
        borderRadius: 12,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.2 )',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
})