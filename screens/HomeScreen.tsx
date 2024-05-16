import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <GluestackUIProvider config={config}>

    </GluestackUIProvider> 
  )
}