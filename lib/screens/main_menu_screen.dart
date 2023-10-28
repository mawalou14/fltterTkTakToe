import 'package:flutter/material.dart';
import 'package:tictactoe/widgets/custom_button.dart';

class MainMenuScreen extends StatelessWidget {
  const MainMenuScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          CustomButton(
            onTap: () {},
            text: 'Create Room',
          ),
          const SizedBox(
            height: 20,
          ),
          CustomButton(
            onTap: () {},
            text: 'Join Room',
          ),
        ],
      ),
    );
  }
}
