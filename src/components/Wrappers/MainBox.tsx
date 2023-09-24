import styled from "styled-components";
import { motion } from "framer-motion"

export const MainBox = styled(motion.main)`
padding: ${props => props.theme.padding.top} ${props => props.theme.padding.right} 0 ${props => props.theme.padding.left};
margin-bottom: ${props => props.theme.margin.bottom};
min-height: calc(100vh  - ${props => props.theme.height.footer});
`
type MainBoxAnimatedProps = {
    children: React.ReactNode;
};


export const MainBoxAnimated = ({ children }: MainBoxAnimatedProps) => {
    return (
        <MainBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </MainBox>
    )
}
export default MainBoxAnimated;