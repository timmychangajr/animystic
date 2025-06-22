
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AppColors } from '@/constants/Colors';
import { defaultBorderRadius, globalStyles } from '@/constants/globalStyles';
import { Animal } from '@/services/animal';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

export default function DetailsScreen() {
  const { fromNav } = useLocalSearchParams<{ fromNav?: string }>();
  const [animal, setAnimal] = useState<Animal | undefined>()
  useFocusEffect(
    useCallback(() => {
      if (fromNav && fromNav !== 'undefined') {
        const val = JSON.parse(fromNav) as Animal;
        if (val) {
          if (val) {
            setAnimal(val);
          }
        }
      }
    }, [fromNav])
  );

  return animal ? (
    <ThemedView isSafeArea style={globalStyles.container} backgroundColor='background'>
      <View style={globalStyles.titleContainer}>
        <ThemedText type="title">{animal.name}</ThemedText>
      </View>
      {animal?.imageUrl &&
        <Image source={{ uri: animal?.imageUrl }} style={styles.animalImage} />
      }
      <ThemedView withShadow style={[globalStyles.cardContainer, {flex: undefined}]} backgroundColor='secondaryBackground'>
        <ThemedText label='Nerdy Name' type='subtitle'>{animal.taxonomy.scientific_name}</ThemedText>
        <ThemedText label='Baby Names' type='subtitle'>{animal.characteristics.name_of_young}</ThemedText>
        <ThemedText label='Lifestyle' type='subtitle'>{animal.characteristics.lifestyle}</ThemedText>
        <ThemedText label='Lifespan' type='subtitle'>{animal.characteristics.lifespan}</ThemedText>
        <ThemedText label='Type' type='subtitle'>{animal.characteristics.type}</ThemedText>
        <ThemedText label='Predators' type='subtitle'>{animal.characteristics.predators}</ThemedText>
        <ThemedText label='Diet' type='subtitle'>{animal.characteristics.diet}</ThemedText>
        <ThemedText label='Litter' type='subtitle'>{animal.characteristics.litter_size}</ThemedText>
        <ThemedText label='Prey' type='subtitle'>{animal.characteristics.prey}</ThemedText>
        <ThemedText label='Prey' type='subtitle'>{animal.characteristics.main_prey}</ThemedText>
      </ThemedView>
    </ThemedView>
  ) : <ThemedView>
      <ActivityIndicator color={AppColors.icon} size='large' />
  </ThemedView>;
}

const styles = StyleSheet.create({
  animalImage: { height: 200, borderRadius: defaultBorderRadius },
})
