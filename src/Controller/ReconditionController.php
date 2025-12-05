<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ReconditionController extends AbstractController
{
    #[Route('/recondition', name: 'app_recondition')]
    public function index(): Response
    {
        return $this->render('recondition/index.html.twig', [
            'controller_name' => 'ReconditionController',
        ]);
    }
}
