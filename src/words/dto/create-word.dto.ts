import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, IsOptional, IsString } from 'class-validator';

export class CreateWordDto {
  @ApiProperty({
    minLength: 1,
    maxLength: 255,
  })
  @Length(1, 255)
  @IsNotEmpty()
  @IsString()
  readonly nativePhrase: string;

  @ApiProperty({
    minLength: 1,
    maxLength: 255,
  })
  @Length(1, 255)
  @IsString()
  @IsOptional()
  readonly translatedPhrase?: string;
}
