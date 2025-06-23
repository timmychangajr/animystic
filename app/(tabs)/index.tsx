import { ThemedButton } from '@/components/ThemedButton';
import { ThemedInput } from '@/components/ThemedInput';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { defaultBorderRadius, defaultPadding, globalStyles } from '@/constants/globalStyles';
import getAnimal, { Animal } from '@/services/animal';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, View } from 'react-native';

const sloth = require('../../assets/images/ani_sloth.png')
const monkey = require('../../assets/images/ani_monkey.png')
const frog = require('../../assets/images/ani_frog.png')

export default function HomeScreen() {
  const router = useRouter();
  const [animalName, setAnimalName] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [animals, setAnimals] = useState<Animal[]>([])
  const [error, setError] = useState<string>('')


  const onSubmit = async (newAnimal?: Animal) => {
    setIsLoading(true)
    setError('')
    let officialAnimal = newAnimal;
    if (!officialAnimal?.name) officialAnimal = await getAnimal(animalName)
    if (officialAnimal?.name) {
      if (!newAnimal) setAnimals(prev => [...prev, officialAnimal])
      router.navigate({
        pathname: '/details',
        params: { fromNav: JSON.stringify(officialAnimal) },
      });
    } else {
      setAnimalName('')
      setError('Try another animal...')
    }
    setIsLoading(false)
  }
  return (
    <ThemedView isSafeArea style={globalStyles.container}>
      <View style={[globalStyles.titleContainer, { flex: 0.5, flexDirection: 'column' }]}>
        <ThemedText type="title">Animystic</ThemedText>
        <View style={styles.promoImgContainer}>
          <Image source={sloth} style={styles.promoImg} />
          <Image source={monkey} style={styles.promoImg} />
          <Image source={frog} style={styles.promoImg} />
        </View>
      </View>
      <KeyboardAvoidingView style={{ justifyContent: 'flex-start' }} behavior='padding'>
        <View style={[globalStyles.cardContainer, { flex: undefined, alignItems: 'center', gap: defaultPadding }]}>
          <ThemedText type='subtitle'>Curious about an animal?</ThemedText>
          <ThemedText textColor='quietText'>{'We will try to give you information based on what we have available...'}</ThemedText>
          <ThemedInput testID='search_input' withShadow value={animalName} onChangeText={setAnimalName} placeholder={error} />
          <ThemedButton testID='search_btn' withShadow title='Search' isLoading={isLoading} onPress={() => onSubmit()} />
        </View>
      </KeyboardAvoidingView>
      {animals.length ?
        <View style={styles.recentContainer} testID='recent_view'>
          <ThemedText textColor='quietText'>Recent</ThemedText>
          {animals.map((val, index) => (
            <ThemedButton
              withShadow
              testID='recent_btn'
              title={val.name}
              onPress={() => onSubmit(val)}
              key={index.toString()}
              backgroundColor='tertiaryBackground'
            />
          ))}
        </View>
      :null}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  recentContainer: { paddingHorizontal: defaultPadding * 2, gap: 10 },
  promoImg: { height: 50, width: 50, borderRadius: defaultBorderRadius },
  promoImgContainer: { flexDirection: 'row', gap: defaultPadding / 2, paddingTop: defaultPadding },
  cardContainer: {
    flex: 1,
    padding: defaultPadding,
    borderRadius: defaultBorderRadius,
    marginVertical: defaultPadding
  }
})
