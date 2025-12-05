<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class LinuxController extends AbstractController
{
    #[Route('/linux', name: 'app_linux')]
    public function index(): Response
    {
        return $this->render('linux/index.html.twig', [
            'controller_name' => 'LinuxController',
        ]);
    }
}
