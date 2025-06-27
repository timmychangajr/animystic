
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AppColors } from '@/constants/Colors';
import { defaultBorderRadius, globalStyles } from '@/constants/globalStyles';
import { Animal } from '@/services/models';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, View } from 'react-native';

export default function DetailsScreen() {
  const { fromNav } = useLocalSearchParams<{ fromNav?: string }>();
  const [animal, setAnimal] = useState<Animal | undefined>()
  const [dataList, setDataList] = useState<{ label: string, value: string|undefined }[]>([])
  useEffect(() => {
    if (fromNav && fromNav !== 'undefined') {
      const val = JSON.parse(fromNav) as Animal;
      if (val && val.name !== animal?.name) {
        setAnimal(val);
        setDataList([
          { label: 'Nerdy Name', value: val?.taxonomy?.scientific_name },
          { label: 'Baby Names', value: val?.characteristics?.name_of_young },
          { label: 'Lifestyle', value: val?.characteristics?.lifestyle },
          { label: 'Lifespan', value: val?.characteristics?.lifespan },
          { label: 'Type', value: val?.characteristics?.type },
          { label: 'Predators', value: val?.characteristics?.predators },
          { label: 'Diet', value: val?.characteristics?.diet },
          { label: 'Litter', value: val?.characteristics?.litter_size },
          { label: 'Prey', value: val?.characteristics?.prey },
          { label: 'Prey', value: val?.characteristics?.main_prey },
        ])
      }
    }
  }, [fromNav, animal]);

  return animal ? (
    <ThemedView isSafeArea style={globalStyles.container} backgroundColor='background'>
      <View style={globalStyles.titleContainer}>
        <ThemedText testID='animal_name' type="title">{animal.name}</ThemedText>
      </View>
      {animal?.imageUrl &&
        <Image source={{ uri: animal?.imageUrl }} style={[styles.animalImage, globalStyles.shadowProps]} />
      }
      <ScrollView style={{ flex: 1 }}>
        <ThemedView withShadow style={[globalStyles.cardContainer, { flex: undefined }]} backgroundColor='secondaryBackground'>
          {dataList.map(({ label, value }, index) => (
            <ThemedText key={`${label}_${index}`} label={label} type='subtitle'>{value}</ThemedText>
          ))}
        </ThemedView>
      </ScrollView >
    </ThemedView>
  ) : <ThemedView>
    <ActivityIndicator color={AppColors.icon} size='large' />
  </ThemedView>;
}

const styles = StyleSheet.create({
  animalImage: {
    borderRadius: defaultBorderRadius,
    aspectRatio: 1.5
  },
})
