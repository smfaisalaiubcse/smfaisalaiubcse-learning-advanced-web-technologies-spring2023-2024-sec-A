import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {

    // @ApiProperty()
    // commentText?: string;
  
    // @ApiProperty()
    // commentedBy?: string;
  
    // @ApiProperty()
    // postId?: number;
}
