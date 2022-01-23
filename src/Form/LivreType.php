<?php

namespace App\Form;

use App\Entity\Livre;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class LivreType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('isbn', null, [
                'label' => 'ISBN-13',
                'attr' => ['class' => 'form-control']
            ])
            ->add('titre', null, [
                'label' => 'Titre de livre',
                'attr' => ['class' => 'form-control']
            ])
            ->add('nombre_pages', null, [
                'label' => 'Nombre de pages',
                'attr' => ['class' => 'form-control']
            ])
            ->add('date_de_parution', DateType::class, [
                'label' => 'Date de parution',
                'widget' => 'single_text',
                'attr' => ['class' => 'form-control'],
            ])
            ->add('note', null, [
                'label' => 'Note',
                'attr' => ['class' => 'form-control']
            ])
            ->add('auteurs', null, [
                'label' => 'Auteurs',
                'attr' => ['class' => 'form-control']
            ])
            ->add('genres', null, [
                'label' => 'Genres',
                'attr' => ['class' => 'form-control']
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Livre::class,
        ]);
    }
}
