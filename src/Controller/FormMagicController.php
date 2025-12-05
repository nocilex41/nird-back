<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class FormMagicController extends AbstractController
{
    #[Route('/form/magic', name: 'app_form_magic')]
    public function index(): Response
    {
        return $this->render('form_magic/index.html.twig', [
            'controller_name' => 'FormMagicController',
        ]);
    }
}
