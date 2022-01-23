<?php

namespace App\Form;

use App\Entity\Auteur;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AuteurType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom_prenom', null, [
                'label' => 'Nom et Prenom',
                'attr' => ['class' => 'form-control']
            ])
            ->add('sexe', ChoiceType::class, [
                'choices'  => [
                    'Féminin' => 'F',
                    'Masculin' => 'M',
                ],
                'attr' => ['class' => 'form-control']
            ])
            ->add('date_de_naissance', DateType::class, [
                'widget' => 'single_text',
                'attr' => ['class' => 'form-control'],
            ])
            ->add('nationalite', null, [
                'attr' => ['class' => 'form-control']]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Auteur::class,
        ]);
    }
}